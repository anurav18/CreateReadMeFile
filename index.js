var inquirer = require("inquirer");
var fs = require("fs");
var createmarkdown = require("./createmarkdown");

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
        message: 'Select the license',
        choices: ["MIT","BSD","GPL"]
    },
    {
        type:'input',
        name:'contributions',
        message: 'Enter the contributions'
    }
    ,
    {
        type:'input',
        name:'testInstructions',
        message: 'Enter test instructions'
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
    },
    {
        type:'input',
        name:'demo',
        message: 'Enter the destination of demo video'
    }]


inquirer.prompt(questions).then(response => {
    
    fs.writeFile("README.md",createmarkdown(response),function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success");
    })

})