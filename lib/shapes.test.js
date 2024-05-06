const {Circle, Triangle, Square} = require("../lib/shapes.js")

describe('Circle class', () => {
    test("Testing circle method returns correct SVG string with specific color.", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
    });
})

describe('Triangle class', () => {
    test("Testing triangle method returns correct SVG string with specific color.", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
})

describe('Square class', () => {
    test("Testing square method returns correct SVG string with specific color.", () => {
        const shape = new Square();
        shape.setColor("white");
        expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="white" />');
    });
})