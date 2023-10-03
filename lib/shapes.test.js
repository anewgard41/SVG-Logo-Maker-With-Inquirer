const { Square, Triangle, Circle } = require("./shapes");

// Each shape has two tests that function the same. First to test that the render() method functions properly, then to check that the setColor() method functions properly for each shape. 
describe("Square", () => {
    test("Should render svg for a blue rect element", () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="blue" />`
        const square = new Square();
        square.setColor("blue");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a setColor parameter.", () => {
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill="orange" />`
        const square = new Square();
        square.setColor("orange");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

})

describe("Triangle", () => {
    test("Should render svg for a cream polygon element", () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="cream" />`
        const square = new Triangle();
        square.setColor("cream");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a setColor parameter.", () => {
        const expectedSvg = `<polygon points="150, 18 244, 182 56, 182" fill="orange" />`
        const square = new Triangle();
        square.setColor("orange");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

})

describe("Circle", () => {
    test("Should render svg for an orange circle element", () => {
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="orange" />`
        const square = new Circle();
        square.setColor("orange");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("should accept a setColor parameter.", () => {
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill="teal" />`
        const square = new Circle();
        square.setColor("teal");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });

})
