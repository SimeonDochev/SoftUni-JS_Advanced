class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get diameter() {
        return this.radius * 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}

const myCircle = new Circle(2);

myCircle.diameter = 1.6
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.area.toFixed(2));