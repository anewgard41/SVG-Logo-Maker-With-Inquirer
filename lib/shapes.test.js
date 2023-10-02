const { Square, Triangle, Circle } = require("./shapes");

describe("Square", () => {
    test("Should render svg for a blue square element", () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="blue" />`
        const square = new Square();
        square.setColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    

})