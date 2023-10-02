// Base constructor class for all shapes
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  }

  
class Circle extends Shape {
    render() {
        return;
    }
  }
  
  class Triangle extends Shape {
    render() {
        return;
    }
  }
  
  class Square extends Shape {
    render() {
        return;
    }
  }

  module.exports = {
    Circle,
    Triangle,
    Square,
  };