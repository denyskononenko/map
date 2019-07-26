#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu May 16 14:59:47 2019

@author: denyskononenko
"""

import requests
import json
import overpass

OVERPASS_SCRIPT = """
        [out:json][timeout:500000][maxsize:2000000000];
        area[int_name="Kyiv", ]->.searchArea;
        (
            (
            node(area.searchArea)[landuse=residential];
            way(area.searchArea)[landuse=residential];
            rel(area.searchArea)[landuse=residential];
            );
            (
            node(area.searchArea)[residential=rural];
            way(area.searchArea)[residential=rural];
            rel(area.searchArea)[residential=rural];
            );
            (
            node(area.searchArea)[residential=urban];
            way(area.searchArea)[residential=urban];
            rel(area.searchArea)[residential=urban];
            );
        );
        out body;
        """
        
OVERPASS_SCRIPT2 = """
        area[name="Київська область"]->.searchArea;
        (
         (
         way(area.searchArea)[building=residential];
         );
        );
        out skel qt;
        >;
        """

def upload_from_osm():
    """Download data from osm"""
    overpass_url = "http://overpass-api.de/api/interpreter"
    overpass_query = """
        [out:json][timeout:50000][maxsize:2000000000];
        area[name="Київська область"]->.searchArea;
        (
            (
            way(area.searchArea)[building=residential];
            );
        );
        out body;
        >;
        out skel qt;
        """
    response = requests.get(overpass_url, 
                            params={'data': overpass_query})
    data = response.json()
    return data

def get_data_from_osm():
    """Download data from osm in the geo-json file"""
    api = overpass.API()
    response = api.get(OVERPASS_SCRIPT2,  responseformat="geojson")
    print("res: {}".format(response))
    return response
    
def main():
    data = get_data_from_osm() #upload_from_osm() 
    #print(data)
    with open("result.geojson", "w") as write_file:
        json.dump(data, write_file, indent=4)
    

if __name__ == "__main__":
    main()