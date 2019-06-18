#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon May 27 17:48:45 2019

@author: denyskononenko
"""

import overpass
import sys

DEF_NAME = "Голосіївський район"

def get_query(name):
    return """
      area[name="{}"]->.searchArea;
      (
        (
          way(area.searchArea)[building];
          rel(area.searchArea)[building];
        );
      );
      out body qt;
      >;
      out body;
      """.format(name)

def get_OSM(name=DEF_NAME):
    api = overpass.API()
    response = api.get(
      get_query(name),
      responseformat='xml'
    ).format(name)
    print(response)
    
if __name__ == "__main__":
    print("args: len {}, {}".format(len(sys.argv), sys.argv[1]))
    if len(sys.argv) > 1:
        print(sys.argv[1])
        get_OSM(sys.argv[1])
    else:
        get_OSM()
        
    
    