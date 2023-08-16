// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseBadge = "";
let licenseLink = "";
let licenseSection = "";
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license === "GNU GPLv3") {
    licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (license === "Apache License 2.0") {
    licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license === "GNU GPLv3") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache License 2.0") {
    licenseLink = "https://opensource.org/licenses/Apache-2.0";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    licenseSection = `[![License](${licenseBadge})](${licenseLink})`;
  }
  return licenseSection;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.contributing}

  ## License

  ${licenseSection}

  ## Tests

  ${data.tests}

  ## Questions

  You can find this project and other works on my GitHub profile, ${data.github}: https://github.com/${data.github}.

  For questions about this project, you can email me at: ${data.email}.
`;
}

module.exports = generateMarkdown;
