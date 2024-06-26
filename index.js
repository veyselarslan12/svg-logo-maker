// Includes packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./lib/shapes")

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "What should be the three-letter abbreviation for your logo?",
    validate: (input) => input.trim().length === 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "What color would you like the text to be in your logo?",
  },
  {
    type: "list",
    name: "shape",
    message: "Which shape would you like to use for your logo?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What color would you like the shape to be in your logo?",
  },
];

// Creating SVG file
function writeToFile(content) {
  fs.writeFile("./logo.svg", content, (err) => {
    if (err) throw err;
    console.log("Successfully generated logo.svg!");
  });
}

// Initializes the data structures
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // console.log(answers)
      let shape;
      switch (answers.shape) {
        case "Circle":
          shape = new Circle();
          break;
        case "Triangle":
            shape = new Triangle();
            break;
        case "Square":
          shape = new Square();
          break;
        default:
          throw new Error("Invalid shape.");
      }
      shape.setColor(answers.shapeColor);
      const svgContent = shape.render(answers.text, answers.textColor);
      writeToFile(svgContent);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
