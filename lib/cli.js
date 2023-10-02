const inquirer = require("inquirer");
const SVG = require('./svg');
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
            .prompt([
                {
                    name: "text",
                    type: "input",
                    message:
                        "Enter text for the logo. (Only can contain up to three characters.)",
                    validate: (text) =>
                        text.length <= 3 || "The logo can only contain up to three characters."
                },
                {
                    name: "textColor",
                    type: "input",
                    message: "Enter color for text"
                },
                {
                    name: "shapeType",
                    type: "list",
                    message: "Choose which kind of shape you would like for your logo:",
                    choices: ["circle", "triangle", "square"]
                },
                {
                    name: "shapeColor",
                    type: "input",
                    message: "Enter color for the shape that the text will go inside of."
                },

            ])
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case "circle":
                        shape = new Circle();
                        break;

                    case "triangle":
                        shape = new Triangle();
                        break;

                    default:
                        shape = new Square();
                        break;
                }
                shape.setColor(shapeColor);

                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile("logo.svg", svg.render());
            })
            .then(() => {
                console.log("Generated logo.svg");
            })
            .catch((error) => {
                console.log(error);
                console.log("Hmm... something's not quite right.")
            })

    }

}

module.exports = CLI;