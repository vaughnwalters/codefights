"use strict";

// Given an integer n, return the largest number that contains exactly n digits.

let nine = "9"
function largestNumber(n) {
  for (let i = 1; i < n ; i++) {
    nine = nine + "9"
  }
  return parseInt(nine)
}

largestNumber(7);
