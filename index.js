var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
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
    name:'contributing',
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
}
]).then(function(response){

    var filename = "README.md";
    var filecontent = `
    
    # ${response.title}



    ##Tests
    ${response.testInstructions}

    ## Installation
    ${response.installation}

    ## License
    Licensed under the ${response.license} license.
    
    ## Questions
    * Feel free to reach me with additional questions using my email : ${response.email}
    * Please follow me on github for more intresting updates in my [repository](${response.github_repository})
    * Explore the [project page](${response.project_page})
    
    `
    fs.writeFile(filename,filecontent,function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success");
    })

})