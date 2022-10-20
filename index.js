// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the title of your project?",
  },

  {
    type: "input",
    name: "description",
    message: "provide a description of your project",
  },

  {
    type: "input",
    name: "installation",
    message: "provide installation instructions for your project",
  },

  {
    type: "input",
    name: "Usage",
    message: "what is the usage information for your project",
  },

  {
    type: "input",
    name: "contributing",
    message: "what does your project contribute",
  },

  {
    type: "input",
    name: "tests",
    message: "how can your project be tested",
  },

  {
    type: "list",
    name: "license",
    message: "what license is your project under?",
    choices: ["MIT", "APACHE2.0", "ISC", "GPL", "None"],
  },

  {
    type: "input",
    name: "github username",
    message: "please enter your github username",
  },

  {
    type: "input",
    name: "email",
    message: "please enter your email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("./dist/README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
