// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");

function intReducer(acc, item) {
  return acc + (String(item) + ", ");
}

function stringOfIntList(items) {
  return Belt_List.reduce(items, "[", intReducer) + "]";
}

function stringOfList(items, stringify) {
  var elementReducer = function (accumulator, item) {
    return accumulator + (Curry._1(stringify, item) + ", ");
  };
  return Belt_List.reduce(items, "[", elementReducer) + "]";
}

var items = /* :: */[
  10,
  /* :: */[
    11,
    /* :: */[
      12,
      /* :: */[
        13,
        /* :: */[
          14,
          /* :: */[
            15,
            /* [] */0
          ]
        ]
      ]
    ]
  ]
];

exports.intReducer = intReducer;
exports.stringOfIntList = stringOfIntList;
exports.items = items;
exports.stringOfList = stringOfList;
/* No side effect */