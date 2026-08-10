//// Generate Prime Numbers in a Range

let start: number = 1;
let end: number = 20;

for (let i = start; i <= end; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log(i);
    }
}