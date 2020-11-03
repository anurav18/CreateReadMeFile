function createMarkdown(response) {
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

  ## Usage
  ${response.usage}

  ## Demo

 ![Demo](${response.demo})

  ## License
  Licensed under the ${response.license} license.

  ## Contributions
  ${response.contributions}

  ## Tests
  ${response.testInstructions}

  ## Questions
  * Feel free to reach me with additional questions using my email : ${response.email}
  * My Github [profile](${response.github_repository})
  * Please follow me on github for more intresting updates in my [repository](${response.project_page})
  
  `;
  }
  
  module.exports = createMarkdown;