// Includes packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const shapes = require("./lib/shapes.js")


// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What should be the three-letter abbreviation for your logo?",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be in your logo?"
      },
      {
        type: "list",
        name: "shape",
        message: "Which shape would you like to use for your logo?",
        choices: ["Circle", "Triangle", "Square"]
      },
      {
        type: "input",
        name: "shapeColor",
        message: "What color would you like the shape to be in your logo?"
      },
]

