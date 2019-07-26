#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon May 27 18:07:13 2019

@author: denyskononenko
"""
import os
import sys 
import json
import geojson
import re
from transliterate import translit, get_available_language_codes

# general fields declaration
RESULT_DIR = "/Users/denyskononenko/Documents/map/results"
MBTILES_DIR = "/Users/denyskononenko/Documents/map/results/mbtiles"
MERGED_FILENAME = "/Users/denyskononenko/Documents/map/results/merged_pol.geojson"
PROCESSED_JSON_FILENAME = "/Users/denyskononenko/Documents/map/results/merged_pol_proc.geojson"

REGIONS = ["Київ", "Київська область", "Львів", "Львівська область", "Харків", "Харківська область", "Дніпро", "Дніпропетровська область", "Одеса", "Одеська область"]
REGIONS_TEST = ["Київ", "Харків"]
HEIGHT_OF_FLOOR = 3;
DEFAULT_VALUE_HEIGHT = 5;
UNUESED_FILEDS = ["roof:colour", "building", "roof:shape", "opening_hours", "fuel:lpg", "brand"]
REPORT_SUMMARY = """
Modification summary 

Init number of features: {}
Final number of features: {}

Buildings without height: {} 
Features with LineString type of geometry: {} 
Deleted Points: {}
Deleted MultiPoints: {}
Deleted unsued fields 
(`roof:colour`, `building`, `roof:shape`, `opening_hours`, `fuel:lpg`, `brand`): {}

"""
filenames = []


# functions declaration
def start_pipeline_to_geojson():
    """Steps for generation of total geojson"""
    # get xml files from osm
    for region in REGIONS_TEST:
            print("XML obtaining\nprceeded: {}".format(region))
            filename = region.replace(" ", "_")
            filenames.append(filename)
            os.system('python3 getosm.py "{0}" > {2}/{1}.xml'.format(region, filename, RESULT_DIR))
            
    # make geojson files from xml
    os.chdir(RESULT_DIR)
    print(os.listdir(os.getcwd()))
    for filename in filenames:
            print('Generating of geojson: \nosmtogeojson {0}.xml > {0}.geojson'.format(filename))
            os.system('node --max_old_space_size=4000 `which osmtogeojson` {0}.xml > {0}.geojson'.format(filename))
    print(os.listdir(os.getcwd()))
    
    # open base file
    print(filenames[0])
    with open('{}.geojson'.format(filenames[0])) as geojson1:
        poly_base_geojson = json.load(geojson1)

    # merdge features of the base file with other
    for file in filenames[1:]:
        print("Merging \n")
        print(file)
        with open('{}.geojson'.format(file)) as geojson_temp:
            poly_temp_geojson = json.load(geojson_temp)
        # add to features of the next 
        poly_base_geojson['features'] += poly_temp_geojson['features']

    with open(MERGED_FILENAME, 'w') as outfile:
            json.dump(poly_base_geojson, outfile, indent=3)
    
    return poly_base_geojson
    
def process_geojson(poly_base_geojson):
    """
    Add field height and if it is absent in Property of Feature.
    Save processed geojson in separate file. 
    """
    count_build_without_height = 0
    count_bug_linestring = 0
    count_deleted_points = 0
    count_deleted_multi_points = 0
    count_deleted_unused_fields = 0
    init_features_number = len(poly_base_geojson["features"])
    try:
        for item in poly_base_geojson["features"]:
            properties = item["properties"]
            geom_type = item["geometry"]["type"]
            if geom_type == "Point":
                poly_base_geojson["features"].remove(item)
                count_deleted_points += 1
            else:
                #make dafault value of height if absent
                if "height" not in properties and "building:levels" not in properties:
                    item["properties"]["height"] = str(DEFAULT_VALUE_HEIGHT)
                    count_build_without_height += 1
                elif "height" not in properties and len(re.sub(r"[^0-9^.]", "", item["properties"]["building:levels"])) > 0:
                    # remove all symbols except number from the building:levels field and calculate height field
                    item["properties"]["height"] = str(HEIGHT_OF_FLOOR * float(re.sub(r"[^0-9^.]", "", item["properties"]["building:levels"])))
                    count_build_without_height += 1

                # correct LineString geometry type to Polygon
                if geom_type == "LineString":
                    geom_coordinates = item["geometry"]["coordinates"]
                    item["geometry"]["type"] = "Polygon"
                    item["geometry"]["coordinates"] = [geom_coordinates]
                    count_bug_linestring += 1

                # remove unnececery fields `roof:colour`, `building`, `roof:shape`, `opening_hours`, `fuel:lpg`, `brand`
                for field in UNUESED_FILEDS[1]:
                    if field in item["properties"]:
                        del(item["properties"][field])
                        count_deleted_unused_fields += 1
                        
    except TypeError as error:
        print(error)
        print(type(item))
    final_features_number = len(poly_base_geojson["features"])
    #save corrected json in the file
    #poly_base_geojson["features"] = poly_base_geojson["features"]
    with open(PROCESSED_JSON_FILENAME, 'w') as outfile:
        json.dump(poly_base_geojson, outfile, indent=3)
    # print report 
    print(REPORT_SUMMARY.format(init_features_number, final_features_number, count_build_without_height, count_bug_linestring, count_deleted_points, count_deleted_multi_points, count_deleted_unused_fields))
   

def main():
    base = start_pipeline_to_geojson()
    #with open(MERGED_FILENAME, 'r') as f:
    #    base = json.load(f)
    process_geojson(base)   
        

if __name__ == "__main__":
    main()
