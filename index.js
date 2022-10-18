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
    message: "",
  },

  {
    type: "list",
    name: "license",
    message: "what license is your project under?",
    choices: ["MIT", "APACHE2.0", "ISC", "GPL", "None"],
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
