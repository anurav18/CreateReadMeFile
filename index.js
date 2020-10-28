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
}
]).then(function(response){

    var filename = "README.md";
    var filecontent = `
    
    ### ${response.title}

    ## Installation
    ${response.installation}
    
    
    `
    fs.writeFile(filename,filecontent,function(err){
        if(err){
            return console.log(err);
        }
        console.log("Success");
    })

})