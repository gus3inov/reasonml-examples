// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function toFloat(str) {
  var result = Number(str);
  if (isNaN(result)) {
    return undefined;
  } else {
    return result;
  }
}

function cube(x) {
  return x * x * x;
}

function reciprocal(x) {
  if (x !== 0.0) {
    return 1.0 / x;
  }
  
}

function method1(input) {
  var x = toFloat(input);
  var oneOver = x !== undefined ? reciprocal(x) : undefined;
  var result = oneOver !== undefined ? cube(oneOver) : undefined;
  var output = result !== undefined ? result.toFixed(3) : undefined;
  if (output !== undefined) {
    console.log("The result is" + output);
    return /* () */0;
  } else {
    console.log("Could not calculate result.");
    return /* () */0;
  }
}

method1("2.0");

function method2(input) {
  var x = toFloat(input);
  var oneOver = Belt_Option.flatMap(x, reciprocal);
  var result = Belt_Option.map(oneOver, cube);
  var output = Belt_Option.map(result, (function (param) {
          return param.toFixed(3);
        }));
  if (output !== undefined) {
    console.log("The result is " + output);
    return /* () */0;
  } else {
    console.log("Could not calculate result.");
    return /* () */0;
  }
}

method2("2.0");

exports.toFloat = toFloat;
exports.cube = cube;
exports.reciprocal = reciprocal;
exports.method1 = method1;
exports.method2 = method2;
/*  Not a pure module */
