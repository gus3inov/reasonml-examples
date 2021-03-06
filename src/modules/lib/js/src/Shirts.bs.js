// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var $$String = require("bs-platform/lib/js/string.js");
var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");

function toString(size) {
  if (typeof size === "number") {
    switch (size) {
      case 0 : 
          return "S";
      case 1 : 
          return "M";
      case 2 : 
          return "L";
      
    }
  } else if (size.tag) {
    return $$String.make(size[0], /* "X" */88) + "L";
  } else {
    return $$String.make(size[0], /* "X" */88) + "S";
  }
}

function fromString(s) {
  var s$1 = s.toUpperCase();
  switch (s$1) {
    case "L" : 
        return /* Large */2;
    case "M" : 
        return /* Medium */1;
    case "S" : 
        return /* Small */0;
    default:
      if ((/^X+S$/).test(s$1)) {
        return /* XSmall */Block.__(0, [s$1.length - 1 | 0]);
      } else if ((/^X+L$/).test(s$1)) {
        return /* XLarge */Block.__(1, [s$1.length - 1 | 0]);
      } else {
        return undefined;
      }
  }
}

var Size = /* module */[
  /* toString */toString,
  /* fromString */fromString
];

var cmp = Caml_obj.caml_compare;

var SizeComparator = Belt_Id.MakeComparable(/* module */[/* cmp */cmp]);

function toString$1(cuff) {
  switch (cuff) {
    case 0 : 
        return "button";
    case 1 : 
        return "french";
    case 2 : 
        return "none";
    
  }
}

function fromString$1(s) {
  var match = s.toLowerCase();
  switch (match) {
    case "button" : 
        return /* Button */0;
    case "french" : 
        return /* French */1;
    case "" : 
    case "nocuff" : 
    case "none" : 
        return /* NoCuff */2;
    default:
      return undefined;
  }
}

var Cuff = /* module */[
  /* toString */toString$1,
  /* fromString */fromString$1
];

var cmp$1 = Caml_obj.caml_compare;

var CuffComparator = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$1]);

function toString$2(sleeve) {
  switch (sleeve) {
    case 0 : 
        return "short";
    case 1 : 
        return "long";
    case 2 : 
        return "xlong";
    
  }
}

function fromString$2(s) {
  var match = s.toLowerCase();
  switch (match) {
    case "long" : 
        return /* Long */1;
    case "short" : 
        return /* Short */0;
    case "xlong" : 
        return /* XLong */2;
    default:
      return undefined;
  }
}

var Sleeve = /* module */[
  /* toString */toString$2,
  /* fromString */fromString$2
];

var cmp$2 = Caml_obj.caml_compare;

var SleeveComparator = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$2]);

function toString$3(color) {
  switch (color) {
    case 0 : 
        return "white";
    case 1 : 
        return "blue";
    case 2 : 
        return "red";
    case 3 : 
        return "green";
    case 4 : 
        return "brown";
    
  }
}

function fromString$3(s) {
  var match = s.toLowerCase();
  switch (match) {
    case "blue" : 
        return /* Blue */1;
    case "brown" : 
        return /* Brown */4;
    case "green" : 
        return /* Green */3;
    case "red" : 
        return /* Red */2;
    case "white" : 
        return /* White */0;
    default:
      return undefined;
  }
}

var Color = /* module */[
  /* toString */toString$3,
  /* fromString */fromString$3
];

var cmp$3 = Caml_obj.caml_compare;

var ColorComparator = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$3]);

function toString$4(pattern) {
  switch (pattern) {
    case 0 : 
        return "solid";
    case 1 : 
        return "pinstripe";
    case 2 : 
        return "check";
    
  }
}

function fromString$4(s) {
  var match = s.toLowerCase();
  switch (match) {
    case "check" : 
        return /* Check */2;
    case "pinstripe" : 
        return /* Pinstripe */1;
    case "solid" : 
        return /* Solid */0;
    default:
      return undefined;
  }
}

var Pattern = /* module */[
  /* toString */toString$4,
  /* fromString */fromString$4
];

var cmp$4 = Caml_obj.caml_compare;

var PatternComparator = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$4]);

function toString$5(collar) {
  switch (collar) {
    case 0 : 
        return "button";
    case 1 : 
        return "straight";
    case 2 : 
        return "spread";
    
  }
}

function fromString$5(s) {
  var match = s.toLowerCase();
  switch (match) {
    case "button" : 
        return /* Button */0;
    case "spread" : 
        return /* Spread */2;
    case "straight" : 
        return /* Straight */1;
    default:
      return undefined;
  }
}

var Collar = /* module */[
  /* toString */toString$5,
  /* fromString */fromString$5
];

var cmp$5 = Caml_obj.caml_compare;

var CollarComparator = Belt_Id.MakeComparable(/* module */[/* cmp */cmp$5]);

var myOrder = /* record */[
  /* quantity */1,
  /* size : XLarge */Block.__(1, [1]),
  /* sleeve : Long */1,
  /* color : Blue */1,
  /* pattern : Solid */0,
  /* cuff : Button */0,
  /* collar : Button */0
];

exports.Size = Size;
exports.SizeComparator = SizeComparator;
exports.Cuff = Cuff;
exports.CuffComparator = CuffComparator;
exports.Sleeve = Sleeve;
exports.SleeveComparator = SleeveComparator;
exports.Color = Color;
exports.ColorComparator = ColorComparator;
exports.Pattern = Pattern;
exports.PatternComparator = PatternComparator;
exports.Collar = Collar;
exports.CollarComparator = CollarComparator;
exports.myOrder = myOrder;
/* SizeComparator Not a pure module */
