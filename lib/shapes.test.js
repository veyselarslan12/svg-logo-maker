// Importing datas
const {Circle, Triangle, Square} = require("../lib/shapes.js")
const text = "ABC"
const textColor = "red"


// Test codes
describe('Circle class', () => {
    test("Testing circle method returns correct SVG string with specific color.", () => {
        const shape = new Circle();
        shape.setColor("white");
        expect(shape.render(text, textColor)).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="50" fill="white" />
<text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text.toUpperCase()}</text>
</svg>
`);
    });
})

describe('Triangle class', () => {
    test("Testing triangle method returns correct SVG string with specific color.", () => {
        const shape = new Triangle();
        shape.setColor("white");
        expect(shape.render(text, textColor)).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,50 100,150 200,150" fill="white" />
<text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text.toUpperCase()}</text>
</svg>
`);
    });
})

describe('Square class', () => {
    test("Testing square method returns correct SVG string with specific color.", () => {
        const shape = new Square();
        shape.setColor("white");
        expect(shape.render(text, textColor)).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="100" y="50" width="100" height="100" fill="white" />
<text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text.toUpperCase()}</text>
</svg>
`);
    });
})