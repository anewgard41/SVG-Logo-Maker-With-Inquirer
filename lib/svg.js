class SVG {
    constructor() {
        // each svg has two properties, text and shape, set here as an empty string before the setShape and setText methods are run. 
        this.textElement = "";
        this.shapeElement = "";
    }

    render() {
        // Inside SVG tag is the SVG content- the actual shape and text elements that use SVG formatting.  
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }

    setText(message, color) {
        // ensuring the user isn't able to enter more than 3 characters. 
        if (message.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }

    setShape(shape) {
        // example of polymorphism! square.render, circle.render, triangle.render are all possibilites. 
        this.shapeElement = shape.render();
    }

}


module.exports = SVG;
