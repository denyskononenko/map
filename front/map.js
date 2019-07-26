mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNrb25vbmVua28iLCJhIjoiY2pnY2QwanM4MDJuYjJxdGN6cWN4d2dkcSJ9.uih5MR-tgpbVwBsooCFhgw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [ 30.50753, 50.43973],
  zoom: 13
});

var geojson = {
  "type": "FeatureCollections",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43793,
          30.49849
        ]
      },
      "properties": {
        "name": "117",
        "childrens": 30,
        "places": 41,
        "reserved": 7,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "118",
        "childrens": 24,
        "places": 27,
        "reserved": 2,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39913,
          30.50633
        ]
      },
      "properties": {
        "name": "131",
        "childrens": 61,
        "places": 77,
        "reserved": 5,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38273,
          30.44871
        ]
      },
      "properties": {
        "name": "150",
        "childrens": 62,
        "places": 63,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39051,
          30.49146
        ]
      },
      "properties": {
        "name": "157",
        "childrens": 46,
        "places": 50,
        "reserved": 1,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43884,
          30.50581
        ]
      },
      "properties": {
        "name": "158",
        "childrens": 17,
        "places": 29,
        "reserved": 2,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.35804,
          30.47115
        ]
      },
      "properties": {
        "name": "182",
        "childrens": 43,
        "places": 44,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38322,
          30.45099
        ]
      },
      "properties": {
        "name": "196",
        "childrens": 67,
        "places": 94,
        "reserved": 23,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39821,
          30.50354
        ]
      },
      "properties": {
        "name": "198",
        "childrens": 39,
        "places": 41,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38697,
          30.48935
        ]
      },
      "properties": {
        "name": "221",
        "childrens": 17,
        "places": 26,
        "reserved": 8,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40512,
          30.50756
        ]
      },
      "properties": {
        "name": "24",
        "childrens": 39,
        "places": 42,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "253",
        "childrens": 41,
        "places": 48,
        "reserved": 6,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "262",
        "childrens": 16,
        "places": 29,
        "reserved": 10,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.36386,
          30.45704
        ]
      },
      "properties": {
        "name": "285",
        "childrens": 52,
        "places": 81,
        "reserved": 22,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "305",
        "childrens": 27,
        "places": 27,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38883,
          30.52717
        ]
      },
      "properties": {
        "name": "312",
        "childrens": 26,
        "places": 27,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40238,
          30.51366
        ]
      },
      "properties": {
        "name": "32",
        "childrens": 22,
        "places": 28,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39117,
          30.49798
        ]
      },
      "properties": {
        "name": "328",
        "childrens": 18,
        "places": 26,
        "reserved": 8,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38677,
          30.48213
        ]
      },
      "properties": {
        "name": "340",
        "childrens": 39,
        "places": 44,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41774,
          30.51866
        ]
      },
      "properties": {
        "name": "341",
        "childrens": 25,
        "places": 29,
        "reserved": 3,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "372",
        "childrens": 79,
        "places": 79,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.37159,
          30.54637
        ]
      },
      "properties": {
        "name": "389",
        "childrens": 27,
        "places": 29,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39106,
          30.48444
        ]
      },
      "properties": {
        "name": "402",
        "childrens": 32,
        "places": 35,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39374,
          30.49521
        ]
      },
      "properties": {
        "name": "406",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40065,
          30.51082
        ]
      },
      "properties": {
        "name": "41",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39358,
          30.50232
        ]
      },
      "properties": {
        "name": "416",
        "childrens": 42,
        "places": 45,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38508,
          30.48157
        ]
      },
      "properties": {
        "name": "439",
        "childrens": 63,
        "places": 69,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39084,
          30.49411
        ]
      },
      "properties": {
        "name": "440",
        "childrens": 39,
        "places": 39,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "506",
        "childrens": 35,
        "places": 40,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "513",
        "childrens": 41,
        "places": 46,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.36476,
          30.55646
        ]
      },
      "properties": {
        "name": "596",
        "childrens": 58,
        "places": 59,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43709,
          30.50925
        ]
      },
      "properties": {
        "name": "61",
        "childrens": 22,
        "places": 25,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.37973,
          30.45612
        ]
      },
      "properties": {
        "name": "640",
        "childrens": 33,
        "places": 54,
        "reserved": 13,
        "free": 8
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.37879,
          30.45413
        ]
      },
      "properties": {
        "name": "641",
        "childrens": 90,
        "places": 93,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "642",
        "childrens": 78,
        "places": 83,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40326,
          30.52146
        ]
      },
      "properties": {
        "name": "643",
        "childrens": 74,
        "places": 77,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "659",
        "childrens": 16,
        "places": 16,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38166,
          30.44819
        ]
      },
      "properties": {
        "name": "667",
        "childrens": 67,
        "places": 68,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40016,
          30.51689
        ]
      },
      "properties": {
        "name": "717",
        "childrens": 32,
        "places": 33,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4006,
          30.53475
        ]
      },
      "properties": {
        "name": "725",
        "childrens": 74,
        "places": 90,
        "reserved": 7,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.36976,
          30.45267
        ]
      },
      "properties": {
        "name": "726",
        "childrens": 40,
        "places": 61,
        "reserved": 2,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.29916,
          30.5764
        ]
      },
      "properties": {
        "name": "73",
        "childrens": 17,
        "places": 18,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.437754,
          30.510276
        ]
      },
      "properties": {
        "name": "739",
        "childrens": 18,
        "places": 24,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.415,
          30.5207
        ]
      },
      "properties": {
        "name": "764",
        "childrens": 27,
        "places": 35,
        "reserved": 7,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.36268,
          30.46375
        ]
      },
      "properties": {
        "name": "798",
        "childrens": 76,
        "places": 77,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Ромашка\"",
        "childrens": 24,
        "places": 26,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Славута\"",
        "childrens": 20,
        "places": 22,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК\"Барвінок\" ",
        "childrens": 37,
        "places": 49,
        "reserved": 11,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": " 6",
        "childrens": 105,
        "places": 110,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41442,
          30.61386
        ]
      },
      "properties": {
        "name": "113",
        "childrens": 90,
        "places": 95,
        "reserved": 6,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39491,
          30.62884
        ]
      },
      "properties": {
        "name": "132",
        "childrens": 47,
        "places": 50,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40901,
          30.64453
        ]
      },
      "properties": {
        "name": "147",
        "childrens": 67,
        "places": 70,
        "reserved": 2,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42749,
          30.66482
        ]
      },
      "properties": {
        "name": "148",
        "childrens": 80,
        "places": 87,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39613,
          30.64666
        ]
      },
      "properties": {
        "name": "149",
        "childrens": 72,
        "places": 72,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40502,
          30.64338
        ]
      },
      "properties": {
        "name": "20",
        "childrens": 21,
        "places": 51,
        "reserved": 1,
        "free": 29
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "215",
        "childrens": 56,
        "places": 67,
        "reserved": 11,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41574,
          30.65554
        ]
      },
      "properties": {
        "name": "240",
        "childrens": 65,
        "places": 70,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "242",
        "childrens": 79,
        "places": 83,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41706,
          30.65305
        ]
      },
      "properties": {
        "name": "248",
        "childrens": 22,
        "places": 23,
        "reserved": 0,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40594,
          30.65421
        ]
      },
      "properties": {
        "name": "250",
        "childrens": 110,
        "places": 150,
        "reserved": 13,
        "free": 27
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42655,
          30.65259
        ]
      },
      "properties": {
        "name": "256",
        "childrens": 39,
        "places": 57,
        "reserved": 4,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41521,
          30.63458
        ]
      },
      "properties": {
        "name": "270",
        "childrens": 63,
        "places": 69,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.428478,
          30.651031
        ]
      },
      "properties": {
        "name": "275",
        "childrens": 45,
        "places": 54,
        "reserved": 4,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4159,
          30.64615
        ]
      },
      "properties": {
        "name": "290",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40401,
          30.63805
        ]
      },
      "properties": {
        "name": "314",
        "childrens": 40,
        "places": 40,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "315",
        "childrens": 34,
        "places": 38,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42812,
          30.66147
        ]
      },
      "properties": {
        "name": "367",
        "childrens": 39,
        "places": 41,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "370",
        "childrens": 39,
        "places": 50,
        "reserved": 11,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42737,
          30.64846
        ]
      },
      "properties": {
        "name": "385",
        "childrens": 49,
        "places": 60,
        "reserved": 10,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.39163,
          30.6229
        ]
      },
      "properties": {
        "name": "445",
        "childrens": 52,
        "places": 58,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40104,
          30.62951
        ]
      },
      "properties": {
        "name": "5",
        "childrens": 69,
        "places": 70,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "500",
        "childrens": 91,
        "places": 98,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41004,
          30.62431
        ]
      },
      "properties": {
        "name": "550",
        "childrens": 59,
        "places": 65,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40422,
          30.65705
        ]
      },
      "properties": {
        "name": "59",
        "childrens": 58,
        "places": 66,
        "reserved": 8,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42494,
          30.66034
        ]
      },
      "properties": {
        "name": "620",
        "childrens": 41,
        "places": 74,
        "reserved": 16,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42331,
          30.65816
        ]
      },
      "properties": {
        "name": "634",
        "childrens": 51,
        "places": 59,
        "reserved": 6,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "652",
        "childrens": 0,
        "places": 0,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42316,
          30.67394
        ]
      },
      "properties": {
        "name": "678",
        "childrens": 58,
        "places": 60,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40555,
          30.66581
        ]
      },
      "properties": {
        "name": "696",
        "childrens": 89,
        "places": 92,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40681,
          30.63194
        ]
      },
      "properties": {
        "name": "7",
        "childrens": 102,
        "places": 105,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40771,
          30.64752
        ]
      },
      "properties": {
        "name": "704",
        "childrens": 24,
        "places": 60,
        "reserved": 0,
        "free": 36
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42416,
          30.65373
        ]
      },
      "properties": {
        "name": "706",
        "childrens": 16,
        "places": 32,
        "reserved": 15,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "719",
        "childrens": 85,
        "places": 91,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "773",
        "childrens": 52,
        "places": 68,
        "reserved": 4,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41108,
          30.66052
        ]
      },
      "properties": {
        "name": "774",
        "childrens": 89,
        "places": 112,
        "reserved": 3,
        "free": 20
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42792,
          30.64553
        ]
      },
      "properties": {
        "name": "787",
        "childrens": 39,
        "places": 70,
        "reserved": 6,
        "free": 25
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "790",
        "childrens": 18,
        "places": 18,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "791",
        "childrens": 54,
        "places": 55,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "792",
        "childrens": 89,
        "places": 92,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41746,
          30.64826
        ]
      },
      "properties": {
        "name": "800",
        "childrens": 74,
        "places": 101,
        "reserved": 7,
        "free": 20
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42008,
          30.66012
        ]
      },
      "properties": {
        "name": "805",
        "childrens": 86,
        "places": 114,
        "reserved": 23,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41097,
          30.64132
        ]
      },
      "properties": {
        "name": "809",
        "childrens": 36,
        "places": 37,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40021,
          30.61977
        ]
      },
      "properties": {
        "name": "89",
        "childrens": 74,
        "places": 86,
        "reserved": 2,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42084,
          30.68618
        ]
      },
      "properties": {
        "name": "99",
        "childrens": 60,
        "places": 68,
        "reserved": 2,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Монтессорі сад",
        "childrens": 72,
        "places": 75,
        "reserved": 4,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Пролісок",
        "childrens": 50,
        "places": 59,
        "reserved": 7,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС \"Перевесло\"",
        "childrens": 82,
        "places": 87,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС \"Радосинь\"",
        "childrens": 72,
        "places": 85,
        "reserved": 1,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50118,
          30.58202
        ]
      },
      "properties": {
        "name": "'НВК \"Київські каштани\"'",
        "childrens": 39,
        "places": 40,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47814,
          30.62378
        ]
      },
      "properties": {
        "name": "102",
        "childrens": 23,
        "places": 53,
        "reserved": 1,
        "free": 29
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51468,
          30.59864
        ]
      },
      "properties": {
        "name": "111",
        "childrens": 57,
        "places": 60,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.498179,
          30.584996
        ]
      },
      "properties": {
        "name": "136",
        "childrens": 32,
        "places": 41,
        "reserved": 9,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.53009,
          30.60509
        ]
      },
      "properties": {
        "name": "165",
        "childrens": 63,
        "places": 65,
        "reserved": 3,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49886,
          30.58508
        ]
      },
      "properties": {
        "name": "170",
        "childrens": 45,
        "places": 79,
        "reserved": 5,
        "free": 29
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48393,
          30.66898
        ]
      },
      "properties": {
        "name": "175",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48465,
          30.6345
        ]
      },
      "properties": {
        "name": "176",
        "childrens": 26,
        "places": 55,
        "reserved": 5,
        "free": 24
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46451,
          30.63017
        ]
      },
      "properties": {
        "name": "202",
        "childrens": 49,
        "places": 81,
        "reserved": 2,
        "free": 30
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "222",
        "childrens": 49,
        "places": 50,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "278",
        "childrens": 0,
        "places": 16,
        "reserved": 0,
        "free": 16
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52299,
          30.60202
        ]
      },
      "properties": {
        "name": "300",
        "childrens": 87,
        "places": 95,
        "reserved": 8,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47162,
          30.63368
        ]
      },
      "properties": {
        "name": "301",
        "childrens": 31,
        "places": 44,
        "reserved": 1,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "333",
        "childrens": 41,
        "places": 43,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "362",
        "childrens": 64,
        "places": 80,
        "reserved": 16,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.526489,
          30.612305
        ]
      },
      "properties": {
        "name": "421",
        "childrens": 75,
        "places": 96,
        "reserved": 4,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5283,
          30.60585
        ]
      },
      "properties": {
        "name": "459",
        "childrens": 35,
        "places": 52,
        "reserved": 4,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46867,
          30.62915
        ]
      },
      "properties": {
        "name": "491",
        "childrens": 25,
        "places": 81,
        "reserved": 3,
        "free": 53
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46998,
          30.63412
        ]
      },
      "properties": {
        "name": "50",
        "childrens": 48,
        "places": 51,
        "reserved": 2,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "507",
        "childrens": 18,
        "places": 24,
        "reserved": 2,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48111,
          30.63226
        ]
      },
      "properties": {
        "name": "508",
        "childrens": 30,
        "places": 56,
        "reserved": 8,
        "free": 18
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48267,
          30.62931
        ]
      },
      "properties": {
        "name": "509",
        "childrens": 17,
        "places": 39,
        "reserved": 1,
        "free": 21
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51259,
          30.60443
        ]
      },
      "properties": {
        "name": "512",
        "childrens": 16,
        "places": 62,
        "reserved": 3,
        "free": 43
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47732,
          30.62951
        ]
      },
      "properties": {
        "name": "514",
        "childrens": 24,
        "places": 39,
        "reserved": 2,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47507,
          30.6249
        ]
      },
      "properties": {
        "name": "519",
        "childrens": 34,
        "places": 52,
        "reserved": 4,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "520",
        "childrens": 17,
        "places": 46,
        "reserved": 0,
        "free": 29
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47847,
          30.62576
        ]
      },
      "properties": {
        "name": "528",
        "childrens": 46,
        "places": 49,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4853,
          30.63395
        ]
      },
      "properties": {
        "name": "534",
        "childrens": 31,
        "places": 54,
        "reserved": 1,
        "free": 22
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47634,
          30.63631
        ]
      },
      "properties": {
        "name": "555",
        "childrens": 56,
        "places": 57,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47062,
          30.63941
        ]
      },
      "properties": {
        "name": "569",
        "childrens": 12,
        "places": 42,
        "reserved": 2,
        "free": 28
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47017,
          30.62581
        ]
      },
      "properties": {
        "name": "597",
        "childrens": 34,
        "places": 96,
        "reserved": 4,
        "free": 58
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50557,
          30.61025
        ]
      },
      "properties": {
        "name": "689",
        "childrens": 35,
        "places": 84,
        "reserved": 5,
        "free": 44
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50276,
          30.61146
        ]
      },
      "properties": {
        "name": "690",
        "childrens": 45,
        "places": 67,
        "reserved": 5,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.53019,
          30.61423
        ]
      },
      "properties": {
        "name": "721",
        "childrens": 55,
        "places": 79,
        "reserved": 3,
        "free": 21
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50887,
          30.60327
        ]
      },
      "properties": {
        "name": "742",
        "childrens": 39,
        "places": 51,
        "reserved": 1,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50987,
          30.61529
        ]
      },
      "properties": {
        "name": "743",
        "childrens": 48,
        "places": 54,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49961,
          30.60201
        ]
      },
      "properties": {
        "name": "744",
        "childrens": 40,
        "places": 41,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50464,
          30.60659
        ]
      },
      "properties": {
        "name": "745",
        "childrens": 38,
        "places": 62,
        "reserved": 5,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "746",
        "childrens": 49,
        "places": 57,
        "reserved": 5,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5003,
          30.59493
        ]
      },
      "properties": {
        "name": "752",
        "childrens": 42,
        "places": 58,
        "reserved": 5,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50474,
          30.61364
        ]
      },
      "properties": {
        "name": "753",
        "childrens": 9,
        "places": 55,
        "reserved": 12,
        "free": 34
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51355,
          30.60717
        ]
      },
      "properties": {
        "name": "755",
        "childrens": 17,
        "places": 59,
        "reserved": 1,
        "free": 41
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.508364,
          30.616922
        ]
      },
      "properties": {
        "name": "757",
        "childrens": 29,
        "places": 88,
        "reserved": 1,
        "free": 58
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50178,
          30.59863
        ]
      },
      "properties": {
        "name": "758",
        "childrens": 25,
        "places": 42,
        "reserved": 4,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49826,
          30.5964
        ]
      },
      "properties": {
        "name": "767",
        "childrens": 43,
        "places": 65,
        "reserved": 2,
        "free": 20
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50524,
          30.5934
        ]
      },
      "properties": {
        "name": "768",
        "childrens": 59,
        "places": 78,
        "reserved": 9,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50434,
          30.59054
        ]
      },
      "properties": {
        "name": "769",
        "childrens": 48,
        "places": 68,
        "reserved": 3,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52762,
          30.60274
        ]
      },
      "properties": {
        "name": "770",
        "childrens": 73,
        "places": 76,
        "reserved": 4,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51468,
          30.60482
        ]
      },
      "properties": {
        "name": "771",
        "childrens": 67,
        "places": 78,
        "reserved": 7,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52468,
          30.60405
        ]
      },
      "properties": {
        "name": "776",
        "childrens": 50,
        "places": 92,
        "reserved": 17,
        "free": 25
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51685,
          30.61273
        ]
      },
      "properties": {
        "name": "780",
        "childrens": 61,
        "places": 61,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "781",
        "childrens": 76,
        "places": 85,
        "reserved": 5,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50723,
          30.5894
        ]
      },
      "properties": {
        "name": "784",
        "childrens": 33,
        "places": 63,
        "reserved": 3,
        "free": 27
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "795",
        "childrens": 41,
        "places": 47,
        "reserved": 4,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51962,
          30.62437
        ]
      },
      "properties": {
        "name": "796",
        "childrens": 46,
        "places": 62,
        "reserved": 4,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51709,
          30.6236
        ]
      },
      "properties": {
        "name": "797",
        "childrens": 41,
        "places": 66,
        "reserved": 6,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52651,
          30.62706
        ]
      },
      "properties": {
        "name": "811",
        "childrens": 66,
        "places": 68,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52527,
          30.62252
        ]
      },
      "properties": {
        "name": "812",
        "childrens": 70,
        "places": 74,
        "reserved": 0,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52051,
          30.6056
        ]
      },
      "properties": {
        "name": "83",
        "childrens": 89,
        "places": 131,
        "reserved": 7,
        "free": 35
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52494,
          30.61876
        ]
      },
      "properties": {
        "name": "9",
        "childrens": 60,
        "places": 93,
        "reserved": 14,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51057,
          30.59991
        ]
      },
      "properties": {
        "name": "94",
        "childrens": 1,
        "places": 37,
        "reserved": 1,
        "free": 35
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Деснянка",
        "childrens": 24,
        "places": 25,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Вікторія\"",
        "childrens": 23,
        "places": 23,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Діамант\"",
        "childrens": 84,
        "places": 92,
        "reserved": 6,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Мрія\"",
        "childrens": 3,
        "places": 14,
        "reserved": 1,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Підростайко",
        "childrens": 11,
        "places": 30,
        "reserved": 0,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Усмішка",
        "childrens": 20,
        "places": 20,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43038,
          30.61155
        ]
      },
      "properties": {
        "name": "166",
        "childrens": 26,
        "places": 47,
        "reserved": 6,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45516,
          30.61728
        ]
      },
      "properties": {
        "name": "184",
        "childrens": 20,
        "places": 20,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43742,
          30.627
        ]
      },
      "properties": {
        "name": "192",
        "childrens": 45,
        "places": 45,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45138,
          30.62498
        ]
      },
      "properties": {
        "name": "243",
        "childrens": 38,
        "places": 52,
        "reserved": 4,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45086,
          30.61433
        ]
      },
      "properties": {
        "name": "244",
        "childrens": 13,
        "places": 15,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49384,
          30.59733
        ]
      },
      "properties": {
        "name": "247",
        "childrens": 36,
        "places": 54,
        "reserved": 1,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45217,
          30.61798
        ]
      },
      "properties": {
        "name": "261",
        "childrens": 21,
        "places": 22,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4337,
          30.60666
        ]
      },
      "properties": {
        "name": "274",
        "childrens": 59,
        "places": 66,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49255,
          30.58146
        ]
      },
      "properties": {
        "name": "282",
        "childrens": 61,
        "places": 64,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44284,
          30.62198
        ]
      },
      "properties": {
        "name": "296",
        "childrens": 37,
        "places": 48,
        "reserved": 8,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44069,
          30.61571
        ]
      },
      "properties": {
        "name": "297",
        "childrens": 34,
        "places": 35,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42576,
          30.6003
        ]
      },
      "properties": {
        "name": "303",
        "childrens": 50,
        "places": 56,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44089,
          30.61273
        ]
      },
      "properties": {
        "name": "311",
        "childrens": 17,
        "places": 35,
        "reserved": 1,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45061,
          30.6311
        ]
      },
      "properties": {
        "name": "319",
        "childrens": 27,
        "places": 40,
        "reserved": 1,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44886,
          30.61438
        ]
      },
      "properties": {
        "name": "337",
        "childrens": 26,
        "places": 59,
        "reserved": 18,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "361",
        "childrens": 29,
        "places": 35,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44851,
          30.62356
        ]
      },
      "properties": {
        "name": "368",
        "childrens": 47,
        "places": 50,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48302,
          30.59779
        ]
      },
      "properties": {
        "name": "381",
        "childrens": 12,
        "places": 32,
        "reserved": 0,
        "free": 20
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44096,
          30.60022
        ]
      },
      "properties": {
        "name": "404",
        "childrens": 59,
        "places": 63,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43501,
          30.62688
        ]
      },
      "properties": {
        "name": "412",
        "childrens": 51,
        "places": 54,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "433",
        "childrens": 37,
        "places": 39,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49129,
          30.60726
        ]
      },
      "properties": {
        "name": "437",
        "childrens": 16,
        "places": 40,
        "reserved": 3,
        "free": 21
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.481,
          30.59172
        ]
      },
      "properties": {
        "name": "438",
        "childrens": 36,
        "places": 51,
        "reserved": 3,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44056,
          30.59542
        ]
      },
      "properties": {
        "name": "441",
        "childrens": 49,
        "places": 52,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "443",
        "childrens": 24,
        "places": 25,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43971,
          30.6293
        ]
      },
      "properties": {
        "name": "446",
        "childrens": 22,
        "places": 25,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48698,
          30.59845
        ]
      },
      "properties": {
        "name": "447",
        "childrens": 42,
        "places": 48,
        "reserved": 4,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44244,
          30.59448
        ]
      },
      "properties": {
        "name": "452",
        "childrens": 39,
        "places": 46,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48151,
          30.59532
        ]
      },
      "properties": {
        "name": "453",
        "childrens": 48,
        "places": 58,
        "reserved": 8,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43721,
          30.6445
        ]
      },
      "properties": {
        "name": "455",
        "childrens": 71,
        "places": 76,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48872,
          30.59579
        ]
      },
      "properties": {
        "name": "471",
        "childrens": 34,
        "places": 49,
        "reserved": 4,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48156,
          30.6015
        ]
      },
      "properties": {
        "name": "473",
        "childrens": 40,
        "places": 40,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43542,
          30.62957
        ]
      },
      "properties": {
        "name": "474",
        "childrens": 31,
        "places": 32,
        "reserved": 0,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46911,
          30.59931
        ]
      },
      "properties": {
        "name": "481",
        "childrens": 27,
        "places": 73,
        "reserved": 15,
        "free": 31
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43926,
          30.60337
        ]
      },
      "properties": {
        "name": "485",
        "childrens": 32,
        "places": 61,
        "reserved": 4,
        "free": 25
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43896,
          30.60104
        ]
      },
      "properties": {
        "name": "501",
        "childrens": 16,
        "places": 37,
        "reserved": 6,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "515",
        "childrens": 36,
        "places": 56,
        "reserved": 6,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "522",
        "childrens": 17,
        "places": 20,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42535,
          30.59903
        ]
      },
      "properties": {
        "name": "525",
        "childrens": 42,
        "places": 73,
        "reserved": 5,
        "free": 26
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48585,
          30.58762
        ]
      },
      "properties": {
        "name": "53",
        "childrens": 206,
        "places": 268,
        "reserved": 7,
        "free": 55
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44666,
          30.62662
        ]
      },
      "properties": {
        "name": "554",
        "childrens": 24,
        "places": 24,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44681,
          30.59585
        ]
      },
      "properties": {
        "name": "559",
        "childrens": 35,
        "places": 38,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "566",
        "childrens": 50,
        "places": 55,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43682,
          30.59525
        ]
      },
      "properties": {
        "name": "576",
        "childrens": 15,
        "places": 30,
        "reserved": 10,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43183,
          30.604219
        ]
      },
      "properties": {
        "name": "577",
        "childrens": 46,
        "places": 67,
        "reserved": 7,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44785,
          30.59288
        ]
      },
      "properties": {
        "name": "582",
        "childrens": 4,
        "places": 6,
        "reserved": 0,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4289,
          30.59857
        ]
      },
      "properties": {
        "name": "583",
        "childrens": 42,
        "places": 48,
        "reserved": 0,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46296,
          30.6223
        ]
      },
      "properties": {
        "name": "591",
        "childrens": 10,
        "places": 51,
        "reserved": 0,
        "free": 41
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46005,
          30.59453
        ]
      },
      "properties": {
        "name": "616",
        "childrens": 28,
        "places": 36,
        "reserved": 3,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43658,
          30.63716
        ]
      },
      "properties": {
        "name": "619",
        "childrens": 47,
        "places": 50,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44364,
          30.66141
        ]
      },
      "properties": {
        "name": "62",
        "childrens": 36,
        "places": 37,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "628",
        "childrens": 37,
        "places": 39,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45226,
          30.61487
        ]
      },
      "properties": {
        "name": "633",
        "childrens": 26,
        "places": 27,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48332,
          30.60742
        ]
      },
      "properties": {
        "name": "655",
        "childrens": 42,
        "places": 45,
        "reserved": 2,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4879,
          30.58543
        ]
      },
      "properties": {
        "name": "670",
        "childrens": 34,
        "places": 39,
        "reserved": 1,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49256,
          30.59479
        ]
      },
      "properties": {
        "name": "671",
        "childrens": 43,
        "places": 68,
        "reserved": 3,
        "free": 22
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4928,
          30.60141
        ]
      },
      "properties": {
        "name": "672",
        "childrens": 39,
        "places": 56,
        "reserved": 5,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43862,
          30.63842
        ]
      },
      "properties": {
        "name": "675",
        "childrens": 13,
        "places": 39,
        "reserved": 10,
        "free": 16
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "680",
        "childrens": 71,
        "places": 88,
        "reserved": 13,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4911,
          30.57935
        ]
      },
      "properties": {
        "name": "688",
        "childrens": 30,
        "places": 48,
        "reserved": 5,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45808,
          30.59266
        ]
      },
      "properties": {
        "name": "691",
        "childrens": 46,
        "places": 63,
        "reserved": 5,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45093,
          30.67562
        ]
      },
      "properties": {
        "name": "700",
        "childrens": 38,
        "places": 66,
        "reserved": 4,
        "free": 24
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.454135,
          30.681576
        ]
      },
      "properties": {
        "name": "701",
        "childrens": 52,
        "places": 48,
        "reserved": 0,
        "free": -4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45352,
          30.68212
        ]
      },
      "properties": {
        "name": "702",
        "childrens": 20,
        "places": 20,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45395,
          30.6737
        ]
      },
      "properties": {
        "name": "703",
        "childrens": 23,
        "places": 39,
        "reserved": 7,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49267,
          30.58244
        ]
      },
      "properties": {
        "name": "801",
        "childrens": 5,
        "places": 45,
        "reserved": 5,
        "free": 35
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Монтессорі",
        "childrens": 25,
        "places": 29,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Берегиня\"",
        "childrens": 34,
        "places": 42,
        "reserved": 2,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Домінанта\"",
        "childrens": 42,
        "places": 53,
        "reserved": 9,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Щастя\"",
        "childrens": 17,
        "places": 20,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44019,
          30.52383
        ]
      },
      "properties": {
        "name": "НВК 141",
        "childrens": 48,
        "places": 56,
        "reserved": 8,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "Струмочок",
        "childrens": 33,
        "places": 36,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49842,
          30.51931
        ]
      },
      "properties": {
        "name": "115",
        "childrens": 52,
        "places": 56,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.525,
          30.45548
        ]
      },
      "properties": {
        "name": "135",
        "childrens": 54,
        "places": 57,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5259,
          30.51144
        ]
      },
      "properties": {
        "name": "144",
        "childrens": 46,
        "places": 73,
        "reserved": 8,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5239,
          30.45527
        ]
      },
      "properties": {
        "name": "190",
        "childrens": 34,
        "places": 37,
        "reserved": 2,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50749,
          30.50216
        ]
      },
      "properties": {
        "name": "193",
        "childrens": 57,
        "places": 61,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50441,
          30.49715
        ]
      },
      "properties": {
        "name": "208",
        "childrens": 60,
        "places": 67,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.500231,
          30.45635
        ]
      },
      "properties": {
        "name": "234",
        "childrens": 53,
        "places": 70,
        "reserved": 4,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50379,
          30.50045
        ]
      },
      "properties": {
        "name": "260",
        "childrens": 39,
        "places": 43,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51982,
          30.51945
        ]
      },
      "properties": {
        "name": "263",
        "childrens": 45,
        "places": 51,
        "reserved": 7,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51549,
          30.49513
        ]
      },
      "properties": {
        "name": "280",
        "childrens": 32,
        "places": 52,
        "reserved": 8,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.522,
          30.52092
        ]
      },
      "properties": {
        "name": "291",
        "childrens": 41,
        "places": 67,
        "reserved": 7,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50239,
          30.45905
        ]
      },
      "properties": {
        "name": "321",
        "childrens": 31,
        "places": 38,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50404,
          30.45813
        ]
      },
      "properties": {
        "name": "436",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51813,
          30.45072
        ]
      },
      "properties": {
        "name": "448",
        "childrens": 44,
        "places": 48,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.496566,
          30.510382
        ]
      },
      "properties": {
        "name": "49",
        "childrens": 16,
        "places": 27,
        "reserved": 4,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49924,
          30.51145
        ]
      },
      "properties": {
        "name": "517",
        "childrens": 42,
        "places": 53,
        "reserved": 9,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49406,
          30.50895
        ]
      },
      "properties": {
        "name": "523",
        "childrens": 56,
        "places": 58,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52158,
          30.46115
        ]
      },
      "properties": {
        "name": "527",
        "childrens": 66,
        "places": 70,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52299,
          30.45448
        ]
      },
      "properties": {
        "name": "531",
        "childrens": 33,
        "places": 35,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51014,
          30.49727
        ]
      },
      "properties": {
        "name": "533",
        "childrens": 51,
        "places": 53,
        "reserved": 6,
        "free": -4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50635,
          30.50298
        ]
      },
      "properties": {
        "name": "572",
        "childrens": 49,
        "places": 59,
        "reserved": 10,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50596,
          30.5072
        ]
      },
      "properties": {
        "name": "573",
        "childrens": 55,
        "places": 64,
        "reserved": 9,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.516238,
          30.45369
        ]
      },
      "properties": {
        "name": "578",
        "childrens": 62,
        "places": 65,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4941,
          30.5116
        ]
      },
      "properties": {
        "name": "579",
        "childrens": 45,
        "places": 60,
        "reserved": 6,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "580",
        "childrens": 45,
        "places": 89,
        "reserved": 20,
        "free": 24
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49722,
          30.51368
        ]
      },
      "properties": {
        "name": "581",
        "childrens": 64,
        "places": 74,
        "reserved": 2,
        "free": 8
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50812,
          30.49178
        ]
      },
      "properties": {
        "name": "585",
        "childrens": 44,
        "places": 48,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50902,
          30.48875
        ]
      },
      "properties": {
        "name": "589",
        "childrens": 59,
        "places": 95,
        "reserved": 4,
        "free": 32
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51453,
          30.48644
        ]
      },
      "properties": {
        "name": "590",
        "childrens": 41,
        "places": 59,
        "reserved": 5,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5111,
          30.45541
        ]
      },
      "properties": {
        "name": "598",
        "childrens": 87,
        "places": 90,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51357,
          30.4896
        ]
      },
      "properties": {
        "name": "602",
        "childrens": 24,
        "places": 54,
        "reserved": 10,
        "free": 20
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49459,
          30.50328
        ]
      },
      "properties": {
        "name": "605",
        "childrens": 33,
        "places": 41,
        "reserved": 4,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5199,
          30.49533
        ]
      },
      "properties": {
        "name": "606",
        "childrens": 36,
        "places": 54,
        "reserved": 1,
        "free": 17
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51943,
          30.49519
        ]
      },
      "properties": {
        "name": "611",
        "childrens": 38,
        "places": 66,
        "reserved": 18,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "613",
        "childrens": 30,
        "places": 51,
        "reserved": 2,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "635",
        "childrens": 30,
        "places": 71,
        "reserved": 1,
        "free": 40
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51457,
          30.50283
        ]
      },
      "properties": {
        "name": "636",
        "childrens": 38,
        "places": 38,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "637",
        "childrens": 41,
        "places": 46,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "639",
        "childrens": 10,
        "places": 22,
        "reserved": 9,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5684,
          30.46179
        ]
      },
      "properties": {
        "name": "65",
        "childrens": 18,
        "places": 30,
        "reserved": 6,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51995,
          30.512
        ]
      },
      "properties": {
        "name": "660",
        "childrens": 43,
        "places": 62,
        "reserved": 10,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.5241,
          30.50549
        ]
      },
      "properties": {
        "name": "662",
        "childrens": 59,
        "places": 77,
        "reserved": 6,
        "free": 12
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.524081,
          30.508759
        ]
      },
      "properties": {
        "name": "663",
        "childrens": 16,
        "places": 20,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52557,
          30.50363
        ]
      },
      "properties": {
        "name": "664",
        "childrens": 60,
        "places": 68,
        "reserved": 9,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.52218,
          30.51467
        ]
      },
      "properties": {
        "name": "665",
        "childrens": 43,
        "places": 53,
        "reserved": 8,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51485,
          30.50452
        ]
      },
      "properties": {
        "name": "668",
        "childrens": 52,
        "places": 59,
        "reserved": 6,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51772,
          30.51733
        ]
      },
      "properties": {
        "name": "673",
        "childrens": 16,
        "places": 18,
        "reserved": 1,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49236,
          30.51921
        ]
      },
      "properties": {
        "name": "685",
        "childrens": 27,
        "places": 27,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51653,
          30.46107
        ]
      },
      "properties": {
        "name": "804",
        "childrens": 81,
        "places": 80,
        "reserved": 2,
        "free": -3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ЦРД \"Я+Сім я\"",
        "childrens": 7,
        "places": 20,
        "reserved": 0,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44019,
          30.52383
        ]
      },
      "properties": {
        "name": "141",
        "childrens": 10,
        "places": 15,
        "reserved": 3,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41695,
          30.54897
        ]
      },
      "properties": {
        "name": "152",
        "childrens": 16,
        "places": 16,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43323,
          30.54605
        ]
      },
      "properties": {
        "name": "205",
        "childrens": 30,
        "places": 36,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "228",
        "childrens": 19,
        "places": 21,
        "reserved": 4,
        "free": -2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "241",
        "childrens": 9,
        "places": 9,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41565,
          30.54358
        ]
      },
      "properties": {
        "name": "265",
        "childrens": 16,
        "places": 46,
        "reserved": 1,
        "free": 29
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "273",
        "childrens": 56,
        "places": 68,
        "reserved": 5,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "298",
        "childrens": 21,
        "places": 21,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "325",
        "childrens": 22,
        "places": 22,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "377",
        "childrens": 23,
        "places": 26,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43396,
          30.54826
        ]
      },
      "properties": {
        "name": "378",
        "childrens": 24,
        "places": 30,
        "reserved": 3,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41734,
          30.54708
        ]
      },
      "properties": {
        "name": "424",
        "childrens": 13,
        "places": 23,
        "reserved": 1,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "450",
        "childrens": 23,
        "places": 26,
        "reserved": 4,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4224,
          30.54159
        ]
      },
      "properties": {
        "name": "457",
        "childrens": 22,
        "places": 22,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4153,
          30.5545
        ]
      },
      "properties": {
        "name": "458",
        "childrens": 32,
        "places": 37,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.440493,
          30.525508
        ]
      },
      "properties": {
        "name": "46",
        "childrens": 23,
        "places": 23,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "498",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "632",
        "childrens": 21,
        "places": 22,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43248,
          30.54034
        ]
      },
      "properties": {
        "name": "653",
        "childrens": 16,
        "places": 17,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "720",
        "childrens": 9,
        "places": 16,
        "reserved": 1,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "728",
        "childrens": 7,
        "places": 7,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "731",
        "childrens": 40,
        "places": 46,
        "reserved": 5,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "\"Малятко\"",
        "childrens": 9,
        "places": 23,
        "reserved": 0,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46967,
          30.50475
        ]
      },
      "properties": {
        "name": "162",
        "childrens": 20,
        "places": 22,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48946,
          30.46435
        ]
      },
      "properties": {
        "name": "163",
        "childrens": 18,
        "places": 58,
        "reserved": 4,
        "free": 36
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "268",
        "childrens": 30,
        "places": 30,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.462341,
          30.522841
        ]
      },
      "properties": {
        "name": "307",
        "childrens": 26,
        "places": 28,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51379,
          30.43659
        ]
      },
      "properties": {
        "name": "399",
        "childrens": 22,
        "places": 33,
        "reserved": 1,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "435",
        "childrens": 8,
        "places": 38,
        "reserved": 11,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51106,
          30.43603
        ]
      },
      "properties": {
        "name": "45",
        "childrens": 40,
        "places": 42,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49234,
          30.45795
        ]
      },
      "properties": {
        "name": "47",
        "childrens": 18,
        "places": 20,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "482",
        "childrens": 30,
        "places": 30,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "486",
        "childrens": 15,
        "places": 15,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "518",
        "childrens": 36,
        "places": 38,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.516363,
          30.427007
        ]
      },
      "properties": {
        "name": "556",
        "childrens": 18,
        "places": 49,
        "reserved": 2,
        "free": 29
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51485,
          30.42157
        ]
      },
      "properties": {
        "name": "563",
        "childrens": 32,
        "places": 36,
        "reserved": 3,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51041,
          30.41261
        ]
      },
      "properties": {
        "name": "570",
        "childrens": 37,
        "places": 53,
        "reserved": 2,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "6",
        "childrens": 3,
        "places": 16,
        "reserved": 6,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50947,
          30.40444
        ]
      },
      "properties": {
        "name": "626",
        "childrens": 55,
        "places": 78,
        "reserved": 3,
        "free": 20
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "676",
        "childrens": 8,
        "places": 35,
        "reserved": 13,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51355,
          30.42075
        ]
      },
      "properties": {
        "name": "679",
        "childrens": 44,
        "places": 50,
        "reserved": 4,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50066,
          30.43551
        ]
      },
      "properties": {
        "name": "72",
        "childrens": 34,
        "places": 36,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51216,
          30.42161
        ]
      },
      "properties": {
        "name": "763",
        "childrens": 9,
        "places": 42,
        "reserved": 1,
        "free": 32
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "775",
        "childrens": 60,
        "places": 60,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50614,
          30.43851
        ]
      },
      "properties": {
        "name": "777",
        "childrens": 72,
        "places": 75,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "803",
        "childrens": 29,
        "places": 46,
        "reserved": 4,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48804,
          30.46759
        ]
      },
      "properties": {
        "name": "88",
        "childrens": 34,
        "places": 40,
        "reserved": 1,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.50391,
          30.44963
        ]
      },
      "properties": {
        "name": "98",
        "childrens": 91,
        "places": 106,
        "reserved": 15,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "СЗШІ№5",
        "childrens": 0,
        "places": 4,
        "reserved": 0,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС \"Дивоцвіт\"",
        "childrens": 73,
        "places": 80,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС \"Паросток\"",
        "childrens": 62,
        "places": 65,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС \"Перлина\"",
        "childrens": 50,
        "places": 79,
        "reserved": 3,
        "free": 26
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС \"Родзинка\"",
        "childrens": 48,
        "places": 54,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "ШДС Поділля",
        "childrens": 40,
        "places": 40,
        "reserved": 3,
        "free": -3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42565,
          30.37699
        ]
      },
      "properties": {
        "name": "127",
        "childrens": 6,
        "places": 36,
        "reserved": 8,
        "free": 22
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46197,
          30.38211
        ]
      },
      "properties": {
        "name": "134",
        "childrens": 20,
        "places": 53,
        "reserved": 5,
        "free": 28
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43357,
          30.3873
        ]
      },
      "properties": {
        "name": "139",
        "childrens": 17,
        "places": 47,
        "reserved": 6,
        "free": 24
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42382,
          30.37229
        ]
      },
      "properties": {
        "name": "156",
        "childrens": 60,
        "places": 68,
        "reserved": 8,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4312,
          30.38799
        ]
      },
      "properties": {
        "name": "199",
        "childrens": 60,
        "places": 70,
        "reserved": 10,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41884,
          30.3793
        ]
      },
      "properties": {
        "name": "203",
        "childrens": 67,
        "places": 77,
        "reserved": 11,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45186,
          30.36866
        ]
      },
      "properties": {
        "name": "214",
        "childrens": 20,
        "places": 23,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43436,
          30.36349
        ]
      },
      "properties": {
        "name": "218",
        "childrens": 47,
        "places": 52,
        "reserved": 2,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41923,
          30.38378
        ]
      },
      "properties": {
        "name": "219",
        "childrens": 5,
        "places": 40,
        "reserved": 2,
        "free": 33
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4276,
          30.36971
        ]
      },
      "properties": {
        "name": "249",
        "childrens": 58,
        "places": 61,
        "reserved": 0,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4225,
          30.37295
        ]
      },
      "properties": {
        "name": "251",
        "childrens": 62,
        "places": 72,
        "reserved": 8,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42019,
          30.38663
        ]
      },
      "properties": {
        "name": "257",
        "childrens": 21,
        "places": 20,
        "reserved": 0,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "276",
        "childrens": 49,
        "places": 82,
        "reserved": 7,
        "free": 26
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42088,
          30.38488
        ]
      },
      "properties": {
        "name": "277",
        "childrens": 48,
        "places": 58,
        "reserved": 7,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "284",
        "childrens": 55,
        "places": 73,
        "reserved": 17,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42851,
          30.38991
        ]
      },
      "properties": {
        "name": "390",
        "childrens": 71,
        "places": 75,
        "reserved": 3,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "442",
        "childrens": 58,
        "places": 62,
        "reserved": 3,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46396,
          30.35999
        ]
      },
      "properties": {
        "name": "463",
        "childrens": 66,
        "places": 69,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4153,
          30.3843
        ]
      },
      "properties": {
        "name": "469",
        "childrens": 35,
        "places": 44,
        "reserved": 9,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "472",
        "childrens": 47,
        "places": 51,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.51379,
          30.42956
        ]
      },
      "properties": {
        "name": "516",
        "childrens": 67,
        "places": 72,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "532",
        "childrens": 72,
        "places": 80,
        "reserved": 8,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "547",
        "childrens": 31,
        "places": 42,
        "reserved": 3,
        "free": 8
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43359,
          30.37948
        ]
      },
      "properties": {
        "name": "560",
        "childrens": 60,
        "places": 67,
        "reserved": 6,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "565",
        "childrens": 44,
        "places": 45,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "567",
        "childrens": 40,
        "places": 65,
        "reserved": 6,
        "free": 19
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4268,
          30.38716
        ]
      },
      "properties": {
        "name": "571",
        "childrens": 57,
        "places": 66,
        "reserved": 4,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "587",
        "childrens": 49,
        "places": 78,
        "reserved": 2,
        "free": 27
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46058,
          30.36026
        ]
      },
      "properties": {
        "name": "599",
        "childrens": 83,
        "places": 60,
        "reserved": 0,
        "free": -23
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45282,
          30.38127
        ]
      },
      "properties": {
        "name": "601",
        "childrens": 73,
        "places": 76,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46772,
          30.33176
        ]
      },
      "properties": {
        "name": "615",
        "childrens": 74,
        "places": 76,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4383,
          30.37698
        ]
      },
      "properties": {
        "name": "669",
        "childrens": 43,
        "places": 46,
        "reserved": 2,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "674",
        "childrens": 151,
        "places": 153,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41344,
          30.40136
        ]
      },
      "properties": {
        "name": "681",
        "childrens": 70,
        "places": 85,
        "reserved": 4,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.49977,
          30.3615
        ]
      },
      "properties": {
        "name": "682",
        "childrens": 26,
        "places": 32,
        "reserved": 6,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "693",
        "childrens": 51,
        "places": 53,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41243,
          30.40545
        ]
      },
      "properties": {
        "name": "694",
        "childrens": 67,
        "places": 80,
        "reserved": 4,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.457001,
          30.396264
        ]
      },
      "properties": {
        "name": "735",
        "childrens": 19,
        "places": 19,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "747",
        "childrens": 44,
        "places": 56,
        "reserved": 5,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "785",
        "childrens": 44,
        "places": 45,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "786",
        "childrens": 75,
        "places": 82,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "789",
        "childrens": 33,
        "places": 36,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43116,
          30.37529
        ]
      },
      "properties": {
        "name": "80",
        "childrens": 55,
        "places": 72,
        "reserved": 4,
        "free": 13
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40977,
          30.40629
        ]
      },
      "properties": {
        "name": "814",
        "childrens": 96,
        "places": 99,
        "reserved": 4,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40957,
          30.41125
        ]
      },
      "properties": {
        "name": "819",
        "childrens": 54,
        "places": 59,
        "reserved": 2,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43026,
          30.37407
        ]
      },
      "properties": {
        "name": "95",
        "childrens": 7,
        "places": 23,
        "reserved": 2,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Інтел\"(761)",
        "childrens": 44,
        "places": 65,
        "reserved": 6,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Довіра\"",
        "childrens": 37,
        "places": 46,
        "reserved": 5,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Лілея\"",
        "childrens": 47,
        "places": 48,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Сузір я\"(177)",
        "childrens": 34,
        "places": 35,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41995,
          30.45691
        ]
      },
      "properties": {
        "name": "146",
        "childrens": 15,
        "places": 60,
        "reserved": 5,
        "free": 40
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43763,
          30.47159
        ]
      },
      "properties": {
        "name": "17",
        "childrens": 24,
        "places": 29,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.40181,
          30.48167
        ]
      },
      "properties": {
        "name": "313",
        "childrens": 21,
        "places": 22,
        "reserved": 0,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.443955,
          30.415205
        ]
      },
      "properties": {
        "name": "334",
        "childrens": 40,
        "places": 44,
        "reserved": 2,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43555,
          30.46365
        ]
      },
      "properties": {
        "name": "360",
        "childrens": 32,
        "places": 45,
        "reserved": 2,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43097,
          30.45069
        ]
      },
      "properties": {
        "name": "373",
        "childrens": 21,
        "places": 22,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43535,
          30.45118
        ]
      },
      "properties": {
        "name": "374",
        "childrens": 45,
        "places": 45,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43001,
          30.42207
        ]
      },
      "properties": {
        "name": "382",
        "childrens": 23,
        "places": 30,
        "reserved": 0,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "383",
        "childrens": 42,
        "places": 56,
        "reserved": 7,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "397",
        "childrens": 43,
        "places": 44,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43242,
          30.43198
        ]
      },
      "properties": {
        "name": "51",
        "childrens": 54,
        "places": 70,
        "reserved": 1,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42384,
          30.46734
        ]
      },
      "properties": {
        "name": "55",
        "childrens": 22,
        "places": 24,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43209,
          30.48609
        ]
      },
      "properties": {
        "name": "624",
        "childrens": 68,
        "places": 68,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.41483,
          30.46618
        ]
      },
      "properties": {
        "name": "63",
        "childrens": 44,
        "places": 71,
        "reserved": 1,
        "free": 26
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42892,
          30.4552
        ]
      },
      "properties": {
        "name": "191",
        "childrens": 3,
        "places": 26,
        "reserved": 1,
        "free": 22
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.38646,
          30.44065
        ]
      },
      "properties": {
        "name": "211",
        "childrens": 35,
        "places": 39,
        "reserved": 2,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "223",
        "childrens": 17,
        "places": 20,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.444302,
          30.431533
        ]
      },
      "properties": {
        "name": "225",
        "childrens": 69,
        "places": 75,
        "reserved": 5,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.432109,
          30.421644
        ]
      },
      "properties": {
        "name": "255",
        "childrens": 37,
        "places": 71,
        "reserved": 2,
        "free": 32
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42855,
          30.42728
        ]
      },
      "properties": {
        "name": "295",
        "childrens": 40,
        "places": 45,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43806,
          30.46096
        ]
      },
      "properties": {
        "name": "344",
        "childrens": 37,
        "places": 37,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4337,
          30.45096
        ]
      },
      "properties": {
        "name": "350",
        "childrens": 29,
        "places": 34,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "355",
        "childrens": 40,
        "places": 51,
        "reserved": 9,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43741,
          30.45889
        ]
      },
      "properties": {
        "name": "375",
        "childrens": 21,
        "places": 35,
        "reserved": 5,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43068,
          30.45377
        ]
      },
      "properties": {
        "name": "376",
        "childrens": 14,
        "places": 33,
        "reserved": 9,
        "free": 10
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43818,
          30.41711
        ]
      },
      "properties": {
        "name": "395",
        "childrens": 11,
        "places": 29,
        "reserved": 3,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4414,
          30.42034
        ]
      },
      "properties": {
        "name": "396",
        "childrens": 24,
        "places": 29,
        "reserved": 5,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42954,
          30.42929
        ]
      },
      "properties": {
        "name": "398",
        "childrens": 8,
        "places": 26,
        "reserved": 0,
        "free": 18
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43997,
          30.41767
        ]
      },
      "properties": {
        "name": "425",
        "childrens": 51,
        "places": 54,
        "reserved": 4,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4465,
          30.4249
        ]
      },
      "properties": {
        "name": "432",
        "childrens": 50,
        "places": 52,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42841,
          30.46034
        ]
      },
      "properties": {
        "name": "460",
        "childrens": 4,
        "places": 42,
        "reserved": 1,
        "free": 37
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "464",
        "childrens": 23,
        "places": 36,
        "reserved": 6,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43464,
          30.44871
        ]
      },
      "properties": {
        "name": "476",
        "childrens": 34,
        "places": 42,
        "reserved": 3,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "477",
        "childrens": 26,
        "places": 40,
        "reserved": 3,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.419411,
          30.486763
        ]
      },
      "properties": {
        "name": "478",
        "childrens": 27,
        "places": 41,
        "reserved": 5,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "480",
        "childrens": 71,
        "places": 80,
        "reserved": 4,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "483",
        "childrens": 29,
        "places": 33,
        "reserved": 2,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43877,
          30.43509
        ]
      },
      "properties": {
        "name": "490",
        "childrens": 28,
        "places": 29,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "623",
        "childrens": 29,
        "places": 31,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "625",
        "childrens": 19,
        "places": 20,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42714,
          30.43098
        ]
      },
      "properties": {
        "name": "630",
        "childrens": 16,
        "places": 16,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44042,
          30.47023
        ]
      },
      "properties": {
        "name": "648",
        "childrens": 38,
        "places": 47,
        "reserved": 5,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "649",
        "childrens": 30,
        "places": 59,
        "reserved": 1,
        "free": 28
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "650",
        "childrens": 29,
        "places": 38,
        "reserved": 9,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.425825,
          30.455101
        ]
      },
      "properties": {
        "name": "651",
        "childrens": 37,
        "places": 37,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44823,
          30.44148
        ]
      },
      "properties": {
        "name": "654",
        "childrens": 47,
        "places": 59,
        "reserved": 6,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "677",
        "childrens": 25,
        "places": 87,
        "reserved": 11,
        "free": 51
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "686",
        "childrens": 38,
        "places": 40,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "687",
        "childrens": 30,
        "places": 32,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42054,
          30.47689
        ]
      },
      "properties": {
        "name": "692",
        "childrens": 22,
        "places": 52,
        "reserved": 5,
        "free": 25
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.436316,
          30.476439
        ]
      },
      "properties": {
        "name": "712",
        "childrens": 35,
        "places": 37,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4285,
          30.49263
        ]
      },
      "properties": {
        "name": "713",
        "childrens": 21,
        "places": 33,
        "reserved": 7,
        "free": 5
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.42475,
          30.45156
        ]
      },
      "properties": {
        "name": "714",
        "childrens": 47,
        "places": 48,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4163,
          30.43157
        ]
      },
      "properties": {
        "name": "716",
        "childrens": 35,
        "places": 45,
        "reserved": 2,
        "free": 8
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "748",
        "childrens": 27,
        "places": 33,
        "reserved": 5,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "762",
        "childrens": 86,
        "places": 88,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "НВК \"Сяйво\"",
        "childrens": 15,
        "places": 15,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43763,
          30.47159
        ]
      },
      "properties": {
        "name": "НРЦ17",
        "childrens": 0,
        "places": 6,
        "reserved": 0,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.44894,
          30.50044
        ]
      },
      "properties": {
        "name": "110",
        "childrens": 11,
        "places": 23,
        "reserved": 5,
        "free": 7
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48096,
          30.39896
        ]
      },
      "properties": {
        "name": "154",
        "childrens": 43,
        "places": 49,
        "reserved": 2,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47117,
          30.44441
        ]
      },
      "properties": {
        "name": "155",
        "childrens": 26,
        "places": 26,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47738,
          30.43441
        ]
      },
      "properties": {
        "name": "159",
        "childrens": 41,
        "places": 75,
        "reserved": 9,
        "free": 25
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46886,
          30.46967
        ]
      },
      "properties": {
        "name": "180",
        "childrens": 17,
        "places": 20,
        "reserved": 1,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45816,
          30.48269
        ]
      },
      "properties": {
        "name": "2",
        "childrens": 18,
        "places": 18,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47498,
          30.47357
        ]
      },
      "properties": {
        "name": "204",
        "childrens": 24,
        "places": 25,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46435,
          30.49326
        ]
      },
      "properties": {
        "name": "28",
        "childrens": 24,
        "places": 42,
        "reserved": 3,
        "free": 15
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "292",
        "childrens": 25,
        "places": 27,
        "reserved": 2,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47786,
          30.44694
        ]
      },
      "properties": {
        "name": "293",
        "childrens": 33,
        "places": 59,
        "reserved": 4,
        "free": 22
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "320",
        "childrens": 11,
        "places": 18,
        "reserved": 4,
        "free": 3
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47511,
          30.4435
        ]
      },
      "properties": {
        "name": "323",
        "childrens": 10,
        "places": 25,
        "reserved": 6,
        "free": 9
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47721,
          30.44421
        ]
      },
      "properties": {
        "name": "343",
        "childrens": 8,
        "places": 19,
        "reserved": 0,
        "free": 11
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46821,
          30.40693
        ]
      },
      "properties": {
        "name": "346",
        "childrens": 23,
        "places": 27,
        "reserved": 2,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "348",
        "childrens": 44,
        "places": 44,
        "reserved": 1,
        "free": -1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4749,
          30.40336
        ]
      },
      "properties": {
        "name": "388",
        "childrens": 16,
        "places": 39,
        "reserved": 1,
        "free": 22
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46474,
          30.47497
        ]
      },
      "properties": {
        "name": "40",
        "childrens": 18,
        "places": 19,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "419",
        "childrens": 28,
        "places": 44,
        "reserved": 2,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "423",
        "childrens": 33,
        "places": 36,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47624,
          30.44423
        ]
      },
      "properties": {
        "name": "428",
        "childrens": 30,
        "places": 35,
        "reserved": 1,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47643,
          30.44735
        ]
      },
      "properties": {
        "name": "429",
        "childrens": 47,
        "places": 48,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46831,
          30.44358
        ]
      },
      "properties": {
        "name": "430",
        "childrens": 60,
        "places": 61,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46373,
          30.43456
        ]
      },
      "properties": {
        "name": "431",
        "childrens": 29,
        "places": 32,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "434",
        "childrens": 18,
        "places": 24,
        "reserved": 2,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47313,
          30.40291
        ]
      },
      "properties": {
        "name": "465",
        "childrens": 31,
        "places": 32,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4774,
          30.40503
        ]
      },
      "properties": {
        "name": "467",
        "childrens": 16,
        "places": 17,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "488",
        "childrens": 26,
        "places": 29,
        "reserved": 3,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48119,
          30.45483
        ]
      },
      "properties": {
        "name": "495",
        "childrens": 52,
        "places": 62,
        "reserved": 4,
        "free": 6
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45228,
          30.51731
        ]
      },
      "properties": {
        "name": "54",
        "childrens": 14,
        "places": 14,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "541",
        "childrens": 18,
        "places": 19,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.45333,
          30.49202
        ]
      },
      "properties": {
        "name": "543",
        "childrens": 56,
        "places": 60,
        "reserved": 4,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.47247,
          30.4726
        ]
      },
      "properties": {
        "name": "544",
        "childrens": 26,
        "places": 30,
        "reserved": 2,
        "free": 2
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "545",
        "childrens": 36,
        "places": 41,
        "reserved": 4,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.48259,
          30.39639
        ]
      },
      "properties": {
        "name": "644",
        "childrens": 8,
        "places": 13,
        "reserved": 1,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "645",
        "childrens": 15,
        "places": 15,
        "reserved": 0,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46178,
          30.41055
        ]
      },
      "properties": {
        "name": "647",
        "childrens": 20,
        "places": 21,
        "reserved": 0,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.460051,
          30.399683
        ]
      },
      "properties": {
        "name": "74",
        "childrens": 26,
        "places": 45,
        "reserved": 5,
        "free": 14
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.46082,
          30.42729
        ]
      },
      "properties": {
        "name": "79",
        "childrens": 22,
        "places": 23,
        "reserved": 1,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.469521,
          30.488385
        ]
      },
      "properties": {
        "name": "810",
        "childrens": 44,
        "places": 49,
        "reserved": 1,
        "free": 4
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.4627,
          30.46823
        ]
      },
      "properties": {
        "name": "82",
        "childrens": 22,
        "places": 30,
        "reserved": 7,
        "free": 1
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "СНВК \"Кияночка\"",
        "childrens": 34,
        "places": 41,
        "reserved": 7,
        "free": 0
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          50.43973,
          30.50753
        ]
      },
      "properties": {
        "name": "СНВК \"Пізнайко\"",
        "childrens": 9,
        "places": 26,
        "reserved": 1,
        "free": 16
      }
    }
  ]
}

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates.reverse())
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + "Дитячий садок  " + marker.properties.name + '</h3><p>' + "Всього місць  " + marker.properties.places + '</p><p>' + "Зарезервовано  " + marker.properties.reserved + '</p><p>' + "Вільних  " + marker.properties.free + '</p><p>'))
    .addTo(map);
});