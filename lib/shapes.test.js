// Include tests for each shape class - should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

// Import the shapes classes from the shapes.js file
const {Circle, Triangle, Square} = require('./shapes.js')

// Circle test
describe('Circle', () => {
    it('should test for a circle with a purple background', () => {
        const shape = new Circle();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="purple"/>');
    })
})

// Triangle test
describe('Triangle', () => {
    it('should test for a triangle with a red background', () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
    })
})

// Square test
describe('Square', () => {
    it('should test for a square with a blue (#0000FF) background', () => {
        const shape = new Square();
        shape.setColor("#0000FF");
        expect(shape.render()).toEqual('<rect width="150" height="150" fill="#0000FF" />');
    })
})