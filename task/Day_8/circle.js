'use strict';

const pi = Math.PI;


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    get getRadius() {
        return this.radius;
    }

    set getRadius(r) {
        this.radius = r;
    }

    get getColor() {
        return this.color;
    }

    set getColor(c) {
        this.color = c;
    }

    area() {
        return ((this.radius ** 2) * pi).toFixed(2);
    }

    circumfrence() {
        return (2 * pi * this.radius).toFixed(2);
    }
}

let circle1 = new Circle(1, "red");
let circle2 = new Circle(4, "blue");


console.log(circle1);

console.log(circle1.area());

console.log(circle1.circumfrence());

console.log(circle1.area());

console.log(circle1.getRadius);
