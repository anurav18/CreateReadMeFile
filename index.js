var inquirer = require("inquirer");
var fs = require("fs");

//Questions Array

const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message: 'Enter the description of your project'
    },
    {
        type:'input',
        name:'installation',
        message: 'Enter the installation guidelines'
    },
    {
        type:'input',
        name:'usage',
        message: 'Enter about usage'
    },
    {
        type:'list',
        name:'license',
        message: 'Enter about usage',
        choices: ["MIT","BSD","GPL"]
    },
    {
        type:'input',
        name:'contributions',
        message: 'Enter about usage'
    }
    ,
    {
        type:'input',
        name:'testInstructions',
        message: 'Enter about usage'
    },
    {
        type:'input',
        name:'github_username',
        message: 'Enter your github user name'
    },
    {
        type:'input',
        name:'email',
        message: 'Enter your email'
    },
    {
        type:'input',
        name:'github_repository',
        message: 'Enter the link to the github profile'
    },
    {
        type:'input',
        name:'project_page',
        message: 'Enter the link to the github profile'
    },
    {
        type:'input',
        name:'heading1',
        message: 'Enter the first item in Table of Contents'
    },
    {
        type:'input',
        name:'heading2',
        message: 'Enter the second item in Table of Contents'
    },
    {
        type:'input',
        name:'heading2_subheading1',
        message: 'Enter the sub elements under heading 2'
    },
    {
        type:'input',
        name:'heading2_subheading2',
        message: 'Enter the sub elements under heading 2'
    },
    {
        type:'input',
        name:'heading2_subheading3',
        message: 'Enter the sub elements under heading 2'
    },
    {
        type:'input',
        name:'heading3',
        message: 'Enter the third item in Table of Contents'
    },
    {
        type:'input',
        name:'heading4',
        message: 'Enter the fourth item in Table of Contents'
    },
    {
        type:'input',
        name:'heading5',
        message: 'Enter the fifth item in Table of Contents'
    }]

//function to create Markdown file

function generatefile(response) {
    return `
  # ${response.title}

  ![github license](https://img.shields.io/badge/license-${response.license}-blue.svg)

  ## Table of Contents
  
- [About The Project](#${response.heading1})
- [Usage](#${response.heading2})
  -[Installation](#${response.heading2_subheading1})
  - [Demo](#${response.heading2_subheading2})
  - [Tests](#${response.heading2_subheading3})
- [License](#${response.heading3})
- [Contributions](#${response.heading4})
- [ContactMe](#${response.heading5})



  ## Description
  ${response.description}


  ## Installation
  ${response.installation}
* Log into Github
* Fork this repo 
* Clone your Forked repo on your local machine
* Navigate to the index.html file and open it in your favorite browser


  ## Usage
  ${response.usage}

  ## Demo



  ## License
  Licensed under the ${response.license} license.

  ## Contributions
  ${response.contributions}

  ## Tests
  ${response.testInstructions}

  ## Questions
  * Feel free to reach me with additional questions using my email : ${response.email}
  * Please follow me on github for more intresting updates in my [repository](${response.github_repository})
  * Explore the [project page](${response.project_page})
  
  `;
  }

inquirer.prompt(questions).then(response => {
    
    fs.writeFile("README.md",generatefile(response),function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success");
    })

})