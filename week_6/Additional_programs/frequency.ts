//Count the Frequency of Characters in a String

let str: string = "hello";

for (let i = 0; i < str.length; i++) {
    let count = 1;

    if (str[i] != " ") {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                count++;
            }
        }
        let alreadyPrinted = false;
        for (let k = 0; k < i; k++) {
            if (str[i] == str[k]) {
                alreadyPrinted = true;
                break;
            }
        }
        if (!alreadyPrinted) {
            console.log(str[i] + " = " + count);
        }
    }
}