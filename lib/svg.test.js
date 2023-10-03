const SVG = require('./svg');

describe('SVG', () => {
  let svg;

  // by using the beforeEach method, we set up a new instance of the SVG class before each test. 
  beforeEach(() => {
    svg = new SVG();
  });

  // render test makes sure that the rendered SVG has the expected outputs given the setText and setShape methods. 
  describe('render', () => {
    it('should render the SVG with shape and text elements', () => {
      svg.setShape({ render: () => '<circle cx="50" cy="50" r="40" />' });
      svg.setText('ABC', 'red');

      const expected = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';

      expect(svg.render()).toEqual(expected);
    });
  });

  // setText test ensures that rendered SVG has the three characters inputted by the user. Also ensures that it throws an error whenever user input exceeds three characters. 
  describe('setText', () => {
    it('should set the text element with the given message and color', () => {
      svg.setText('XYZ', 'blue');

      const expected = '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">XYZ</text>';

      expect(svg.textElement).toEqual(expected);
    });

    it('should throw an error if the message length exceeds 3 characters', () => {
      expect(() => {
        svg.setText('Hello', 'red');
      }).toThrow('Text must not exceed 3 characters.');
    });
  });

  // setShape test ensures that the setShape element matches the rendered shape element. 
  describe('setShape', () => {
    it('should set the shape element with the rendered shape', () => {
      const shape = { render: () => '<rect width="100" height="100" />' };
      svg.setShape(shape);

      expect(svg.shapeElement).toEqual('<rect width="100" height="100" />');
    });
  });
});