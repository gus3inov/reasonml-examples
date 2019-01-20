// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var $$String = require("bs-platform/lib/js/string.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function price(size) {
  if (typeof size === "number") {
    switch (size) {
      case 0 : 
          return 11.00;
      case 1 : 
          return 12.50;
      case 2 : 
          return 14.00;
      
    }
  } else {
    return 16.00 + (size[0] - 1 | 0) * 0.50;
  }
}

function stringOfShirtSize(size) {
  if (typeof size === "number") {
    switch (size) {
      case 0 : 
          return "S";
      case 1 : 
          return "M";
      case 2 : 
          return "L";
      
    }
  } else {
    return $$String.make(size[0], /* "X" */88) + "L";
  }
}

function shirtSizeOfString(str) {
  switch (str) {
    case "L" : 
        return /* Large */2;
    case "M" : 
        return /* Medium */1;
    case "S" : 
        return /* Small */0;
    case "XL" : 
        return /* XLarge */[1];
    case "XXL" : 
        return /* XLarge */[2];
    case "XXXL" : 
        return /* XLarge */[3];
    case "XXXXL" : 
        return /* XLarge */[4];
    default:
      return undefined;
  }
}

function toFixed(prim, prim$1) {
  return prim.toFixed(prim$1);
}

function displayPrice(input) {
  var size = shirtSizeOfString(input);
  var amount = Belt_Option.map(size, price);
  if (amount !== undefined) {
    var costStr = amount.toFixed(2);
    console.log("Your " + (String(input) + (" shirt costs \$" + (String(costStr) + "."))));
    return /* () */0;
  } else {
    console.log("Cannot determine price for " + (String(input) + ""));
    return /* () */0;
  }
}

displayPrice("XXL");

var mySize = /* Medium */1;

var otherSize = /* Large */2;

exports.mySize = mySize;
exports.otherSize = otherSize;
exports.price = price;
exports.stringOfShirtSize = stringOfShirtSize;
exports.shirtSizeOfString = shirtSizeOfString;
exports.toFixed = toFixed;
exports.displayPrice = displayPrice;
/*  Not a pure module */
