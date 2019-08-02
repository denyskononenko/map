#%%
# this script parse data with kindergartens information in Kyiv
import os 
import requests
import time
import json
import re
import sys 

from datetime import date
from geopy.geocoders import Nominatim
from bs4 import BeautifulSoup
from pyproj import Proj, transform

data_url = "https://osvita.kyivcity.gov.ua/#/?_k=jydsnf"
data_path = "/Users/denyskononenko/Documents/map/scripts/kyiv_kindergartens_info.html"

res_path = "/Users/denyskononenko/Documents/map/results/kindergartens/kindergartes_info.json"
res_path_geojson = "/Users/denyskononenko/Documents/map/results/kindergartens/kindergartes_info.geojson"
res_path_geojson_osm = "/Users/denyskononenko/Documents/map/results/kindergartens/kindergartes_info_osm.geojson"
# make geojson with kindergartens info with  lat long coordinates
kindergartens_new_ccords = "/Users/denyskononenko/Documents/map/results/kindergartens/poi_kindergartens_coord.geojson"

def get_kindergardens_from_file_data(data_file):
    """
    Get data about kindergardens from .html file of "https://osvita.kyivcity.gov.ua/#/?_k=jydsnf"  with data which lays in the table with class='table table-striped'.
    For check of calculated data.
    
    Parameters
        data_file -- .html file with data about kindergartens
    Returs
        res -- dic of dic for each kindergarten
    """
    with open(data_path, encoding='utf8') as html_file:
        soup = BeautifulSoup(html_file, 'lxml')
    table = soup.find('table', class_='table table-striped')

    res_rows = []
    for row in table.find_all('tr'):
        columns = row.find_all('td')
        res_row = []
        for column in columns:
            res_row.append(column.text)
        res_rows.append(res_row)

    res_rows = list(filter(None, res_rows))
    res_rows = res_rows[:len(res_rows)-1]
    print("total number of kindergartens in Kyiv: {}\n".format(len(res_rows)))
    res = {}
    for el in res_rows:
        kindergarten_info = {'name': el[1], 'district': el[2], 'groups': int(el[3]), 'childrens': int(el[5]), 'positions': int(el[4]), 'reserved': int(el[6]), 'free': int(el[7])}
        res[str(el[1])] = kindergarten_info
    return res

def get_coordinates(name):
    """
    Get place coordinates by its name usin here rest api.

    Paramteres
        name -- place indetificator (number of kindergarten)
    Returns
        coords -- [lat, long] lsit of the place
    """
    # local parametres
    app_id = "dXWci6gKT8CsTs9q1rVc"
    app_code = "BZBMs5w7BaBrL5LpQT9AIA"
    # area to search parameters
    radii = 16343
    center = (50.4399, 30.5179)

    req_text = "https://places.cit.api.here.com/places/v1/discover/search?q=Dytiachyi+Sadok+{5}+Kyiv&in={2}%2C{3}%3Br%3D{4}&Accept-Language=ru-RU%2Cru%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&app_id={0}&app_code={1}".format(app_id, app_code, center[0], center[1], radii, name)

    response = requests.get(req_text)
    response_json = json.loads(response.text)
    if len(response_json['results']['items']) != 0:
        coords = response_json['results']['items'][0]['position']
        print("coordinates of palce with name: {} -- {}".format(name, response_json['results']['items'][0]['position']))
    else:
        coords = [0.0, 0.0]
        print("NO coords, name: {}".format(name))
    return coords

def get_kindergartens_info(year=date.today().year):
    """
    Get actual data about kindergardens from url = "https://osvita.kyivcity.gov.ua/v1/kindergartens/getInfoAboutGroups?year=Param" for particular year

    Parameters:
        year: year for which informations should be presented (default value -- current year)
    Returns:
        array of kindergartens information
    """
    
    url = "https://osvita.kyivcity.gov.ua/v1/kindergartens/getInfoAboutGroups?year={}".format(year)
    feature_point = lambda position, name, childrens, places, reserved, free: {'type': 'Feature', 'properties': {'name': name, 'childrens': childrens, 'places': places, 'reserved': reserved, 'free': free}, 'geometry': {'type': 'Point', 'coordinates': position}}

    resp = requests.get(url)
    json_data = json.loads(resp.text)['data']['cursor']

    print("Total number of kindergartens: {} on state of {}\n".format(len(json_data), date.today().year))
    rows = []
    #process responce
    for kgdn in json_data:
        name = kgdn['_id']['number']
        distr = kgdn['_id']['distr']
        groups_number = len(kgdn['groups'])
        
        childs_number = 0
        total_places = 0
        total_reserved = 0

        for group in kgdn['groups']:
            childs_number += group['info'][0]['numb_ch']
            total_places += group['number_site']['sleepingPlaces'] + group['number_site']['withoutBeds'] + group['number_site']['inclusive'] + group['number_site']['norm']
            total_reserved += len(group['reserv'])

        kindergarten_info = {'name': name, 'district': distr, 'groups': groups_number, 'childrens': childs_number, 'places': total_places, 'reserved': total_reserved, 'free': total_places - childs_number - total_reserved}
        rows.append(kindergarten_info)
    # assembly new geojson file
    new_points_json = {'type': 'FeatureCollections', 'features': []}
    for x in rows:
        feature = feature_point([0.0, 0.0], x['name'], x['childrens'], x['places'], x['reserved'], x['free'])
        new_points_json['features'].append(feature)
    #print(new_points_json)
    return new_points_json

def convert_coordinates(coor_X, coor_Y):
    """
    Convert coordinates from epsg:3857 to epsg:4326 standart

    Parameters
        coor_X -- x coordinate of epsg:3857 standart
        coor_Y -- y coordinate of epsg:3857 standart 

    Return
        [lat, long] array of coordinates of epsg:4326 standart 
    """
    inProj = Proj(init='epsg:3857')
    outProj = Proj(init='epsg:4326')
    x2, y2 = transform(inProj, outProj, coor_X, coor_Y)
    return [x2, y2]

def read_geojson(path):
    with open(path, 'r', encoding='utf-8') as read_file:
        features = json.load(read_file)
    return features

def write_geojson(content, path):
    with open(path, 'w') as write_file:
        json.dump(content, write_file)

def merge_geojsons(file1, file2):
    """
    Merge two gejson by name

    Parameters
        file1 -- geojson file with properties
        file2 -- geojson file with coordinates
    Returns
        res -- geojson data structure
    """
    res = {"type": "FeatureCollections", "features": []}
    for feature in file1["features"]:
        name1 = feature["properties"]["name"]
        for feature2 in file2["features"]:
                name2 = feature2["properties"]["name"]
                if name2 != None:
                    name2_number = re.search("[0-9]+", name2)
                    if name2_number != None:
                        name2_number = name2_number.group(0)
                        if name2_number == name1:
                            temp_feature = feature.copy()
                            temp_feature["geometry"]["coordinates"] = feature2["geometry"]["coordinates"]
                            res["features"].append(temp_feature)
                            #print("name 1: {}\n name 2: {}\n\n".format(name1, name2))
                    else:
                        if name1 == name2:
                            temp_feature = feature.copy()
                            temp_feature["geometry"]["coordinates"] = feature2["geometry"]["coordinates"]
                            res["features"].append(temp_feature)
                            #print("name 1: {}\n name 2: {}\n\n".format(name1, name2))
    return res

#%%
kindgdns = get_kindergartens_info()
kindgdns_coords = read_geojson(kindergartens_new_ccords)

print(kindgdns["features"][:10])
print("\n")
print(kindgdns_coords["features"][:10])

#%%
res = merge_geojsons(kindgdns, kindgdns_coords)
print(res)

#%%
res_path_proc = "/Users/denyskononenko/Documents/map/results/kindergartens/kindergartes_info_osm_proc.geojson"
write_geojson(res, res_path_proc)
#%%
# get coordinates for kindergartens from here api geocoding
kindgdns_with_coordinates = kindgdns.copy()

for el in kindgdns_with_coordinates:
    name = el['name']
    coords = get_coordinates(name)
    el['position'] = coords
    time.sleep(0.3)


#%%
# save resulting data

with open(res_path, 'w') as json_res_file:
    json.dump(kindgdns_with_coordinates, json_res_file)

#%%
# form new geojson data with kindergartens
new_points_json = {'type': 'FeatureCollections', 'features': []}
feature_point = lambda position, name, childrens, places, reserved, free: {'type': 'Feature', 'geometry': {'type': 'Point', 'coordinates': position}, 'properties': {'name': name, 'childrens': childrens, 'places': places, 'reserved': reserved, 'free': free}}

with open(res_path, "r") as json_res_file:
    json_data = json.load(json_res_file)

json_data = [x for x in json_data if x['position'] != [0.0, 0.0]]

for x in json_data:
    feature = feature_point(x['position'], x['name'], x['childrens'], x['places'], x['reserved'], x['free'])
    new_points_json['features'].append(feature)
    #print(x['position'])


#%%
# write new assembled geojson to file
print(new_points_json)
with open(res_path_geojson, "w") as json_res_file:
    json.dump(new_points_json, json_res_file)



#%%
# process json with all poi labels in kyiv from openmaptiles selecting all kindergartens
poi_path = "/Users/denyskononenko/Documents/map/results/kindergartens/poi_openmaptiles.geojson"

with open(poi_path, 'r', encoding='utf-8') as poi_data:
    features = json.load(poi_data)["features"]

kindergartens_poi = {"features": []}
for feature in features:
    if "subclass" in feature["properties"] and feature["properties"]["subclass"] == "kindergarten":
        kindergartens_poi["features"].append(feature)


#%%
#write kindergartens poi data in file
poi_kindergartens = "/Users/denyskononenko/Documents/map/results/kindergartens/poi_kindergartens.geojson"
with open(poi_kindergartens, 'w') as resfile:
    json.dump(kindergartens_poi, resfile)

#%%
print(kindergartens_poi)
#%%
# make geojson with kindergartens info with  lat long coordinates

new_coord_kind = {"features": []}
for feature in kindergartens_poi["features"]:
    temp_dic = {"type": "Feature", "properties": {}, "geometry": {"type": "Point"}}
    #print(feature["properties"]["name"])
    temp_dic["properties"]["name"] = feature["properties"]["name"]
    #print(temp_dic["geometry"])
    #print(feature)
    old_X = feature["geometry"]["coordinates"][0]
    old_Y = feature["geometry"]["coordinates"][1]
    new_coords = convert_coordinates(old_X, old_Y)
    temp_dic["geometry"]["coordinates"] = new_coords
    new_coord_kind["features"].append(temp_dic)

write_geojson(new_coord_kind, kindergartens_new_ccords)
#%%
for feature in new_coord_kind["features"]:
    print(feature)

#%%
print(len(new_coord_kind["features"]))

