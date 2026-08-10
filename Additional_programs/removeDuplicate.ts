//Remove Duplicate Characters from a String

let str: string = "programming";
let result: string = "";

for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) == -1) {
        result = result + str[i];
    }
}
console.log("String after removing duplicates: " + result);