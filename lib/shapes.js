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
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
        return `<polygon points="130, 20 40, 180 220, 180" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
        return `<rect x=75" y="50" width="120" height="120" fill="${this.color}" />`;
    }
  }

  module.exports = {
    Circle,
    Triangle,
    Square,
  };