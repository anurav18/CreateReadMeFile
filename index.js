var inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    }]


inquirer.prompt(questions).then(response => {
    
    fs.writeFile("README.md",generateMarkdown(response),function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success");
    })

})