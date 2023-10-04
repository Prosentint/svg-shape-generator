const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// inquirer prompt to ask user questions
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (text) =>
        text.length <= 3 || "The message cannot be longer than 3 characters",
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal number):',
    },
  ]);
};

// will take user input and create an instance of shape based on those input and write to a file
const generateSVG = (data) => {
  // Create an instance of the selected shape class
  let shape;
  switch (data.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Error: Invalid shape. Please choose a valid shape.');
      return;
  }

  // Set colors for the shape and text
  shape.setColor(data.shapeColor);

  // Create the SVG content based on the selected shape and user input
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="100" y="120" font-size="30" fill="${data.textColor}">
        ${data.text}
      </text>
    </svg>
  `;

  // Write the SVG content to a file named 'logo.svg'
  fs.writeFileSync('generated/logo.svg', svgContent);
};

// the start of the program
const run = () => {
  console.log('Welcome to the SVG Logo Maker!');
  promptUser()
    .then((data) => {
      generateSVG(data);
      console.log('Generated logo.svg');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// calls the program to start
run();