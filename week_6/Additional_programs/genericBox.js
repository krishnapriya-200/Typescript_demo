"use strict";
//Create a Generic Box<T> Class to Store and Display Different Types of Data
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log("Value: " + this.value);
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Hello");
numberBox.display();
stringBox.display();
