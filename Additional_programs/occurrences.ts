//Count the Occurrences of Each Element in an Array

let arr: number[] = [1, 2, 2, 3, 1, 4, 2];

for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    let alreadyCounted = false;
    for (let k = 0; k < i; k++) {
        if (arr[i] == arr[k]) {
            alreadyCounted = true;
            break;
        }
    }
    if (!alreadyCounted) {
        console.log(arr[i] + " = " + count);
    }
}