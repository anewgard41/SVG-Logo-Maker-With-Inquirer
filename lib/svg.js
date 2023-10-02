class SVG {
    constructor() {
        // two SVG properties text and shape
        this.textElement = "";
        this.shapeElement = "";
    }

    render () {
        // Inside SVG tag is the SVG content- the actual shape and text elements that use SVG formatting.  
        return `<svg version ="1.1" width="300" height="200" xmlns="http:www.w.3.org/2000/svg:">${this.shapeElement}${this.textElement}</svg>`
    }

    setText(message, color) {
        
    }

}



