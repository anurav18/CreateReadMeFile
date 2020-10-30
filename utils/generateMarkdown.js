function badge(license) {
    if (license === "None") {
      return "";
    }
  
    return `![github license](https://img.shields.io/badge/license-${license.split(" ").join("-")}-blue.svg)`
  }
  
  // function to generate markdown for README
  function generateMarkdown(response) {
    return `# ${response.title}
    ${badge(response.license)}
    
  Content

  # ${response.title}

  ##Description
  ${response.description}


  ## Installation
  ${response.installation}

  ##Usage
  ${response.usage}

  ## License
  Licensed under the ${response.license} license.

  ##Contributions
  ${response.contributions}

  ##Tests
  ${response.testInstructions}


  ## Questions
  * Feel free to reach me with additional questions using my email : ${response.email}
  * Please follow me on github for more intresting updates in my [repository](${response.github_repository})
  * Explore the [project page](${response.project_page})
  
  `;
  }
  
  module.exports = generateMarkdown;