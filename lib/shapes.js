class Circle {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" /> `;
    }
}

class Square {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}












































// // Getting data from terminal questions
// function shapes({ text, textColor, shape, shapeColor }) {
//   let shapeContent;

//   const lowerCaseShape = shape.toLowerCase();

//   switch (lowerCaseShape) {
//     case "circle":
//       shapeContent = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
//       break;

//     case "triangle":
//       shapeContent = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
//       break;

//     case "square":
//       shapeContent = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
//       break;
//     default:
//       shapeContent = " ";
//   }
//   // Creating SVG content 
//   const svgContent = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   ${shapeContent}

//   <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="central">${text.toUpperCase()}</text>

// </svg>`;

// return svgContent;
// }

// // Exports shapes javascript files
// module.exports = shapes











// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" /> For circle shape

//   <polygon points="150,50 100,150 200,150" fill="red" /> For triangle shape 

//   <rect x="100" y="50" width="100" height="100" fill="white" /> For Square shape


//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>
