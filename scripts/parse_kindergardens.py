#%%
# this script parse data with kindergartens information in Kyiv

import requests
import time
import json

from datetime import date
from geopy.geocoders import Nominatim
from bs4 import BeautifulSoup

data_url = "https://osvita.kyivcity.gov.ua/#/?_k=jydsnf"
data_path = "/Users/denyskononenko/Documents/map/scripts/kyiv_kindergartens_info.html"

res_path = "/Users/denyskononenko/Documents/map/results/kindergartens/kindergartes_info.json"

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

def get_kindergartens_info(year=date.today().year):
    """
    Get actual data about kindergardens from url = "https://osvita.kyivcity.gov.ua/v1/kindergartens/getInfoAboutGroups?year=Param" for particular year

    Parameters:
        year: year for which informations should be presented (default value -- current year)
    Returns:
        array of kindergartens information
    """
    
    url = "https://osvita.kyivcity.gov.ua/v1/kindergartens/getInfoAboutGroups?year={}".format(year)

    resp = requests.get(url)
    json_data = json.loads(resp.text)['data']['cursor']

    print("Total number of kindergartens: {} on state of {}\n".format(len(json_data), date.today().year))
    rows = []
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

        kindergarten_info = {'name': name, 'district': distr, 'groups': groups_number, 'childrens': childs_number, 'positions': total_places, 'reserved': total_reserved, 'free': total_places - childs_number - total_reserved}
        rows.append(kindergarten_info)
    return rows


#%%
geolocator = Nominatim(user_agent="test")
name = lambda x: 'детсад №{} киев'.format(x)

for item in kgdns_numbers:
    location = geolocator.geocode(name(item))
    if location == None:
        print("NEGATIVE - number {}".format(item))
    else:
        print("\nnumber - {}".format(item))
        print(location.address)
        print((location.latitude, location.longitude))
    time.sleep(0.5)

#%%
kindgdns = get_kindergartens_info()
print(kindgdns)

    
#%%
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


get_coordinates(641)

#%%
kindgdns_with_coordinates = kindgdns.copy()

for el in kindgdns_with_coordinates[:5]:
    name = el['name']
    coords = get_coordinates(name)
    el['position'] = coords


#%%
# save resulting

with open(res_path, 'w') as json_res_file:
    json.dump(kindgdns_with_coordinates, json_res_file)

#%%
