const { Circle, Triangle, Square } = require('./shapes');

test('Circle rendering', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle rendering', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="130, 20 40, 180 220, 180" fill="blue" />');
  });

  test('Square rendering', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect x=75" y="50" width="120" height="120" fill="blue" />');
  });