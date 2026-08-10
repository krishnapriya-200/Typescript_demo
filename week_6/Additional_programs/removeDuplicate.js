"use strict";
//Remove Duplicate Characters from a String
let str = "programming";
let result = "";
for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) == -1) {
        result = result + str[i];
    }
}
console.log("String after removing duplicates: " + result);
