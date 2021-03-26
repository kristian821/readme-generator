
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}



const contributeSection = contributeText => {
  if (!contributeText) {
    return '';
  }

  return `
  ## Contributions

  ${contributeText}
   `
}

const tests = testText => {
  if (!testText) {
    return '';
  }

  return `
  ## Tests

  ${testText}

  `
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const projectInfo = data;

  return `
  # ${projectInfo.title}

  ## Description
    ${projectInfo.description}
  ## Table of Contents
    [Installation](README.md/#Installation)
    [Usage](READEME.md/#Usage)
    [Contributions](README.md/#Contributions)
    [Tests](README.md/#Tests)
    [License](README.md/#License)

  ## Installation Instructions
    ${projectInfo.instructions}

  ## Usage
    ${projectInfo.usage}

    ${contributeSection(projectInfo.contributions)}
     
    ${tests(projectInfo.tests)}

  ## License


  ## Questions
    [GitHub](https://github.com/${projectInfo.github})

    Email Me at ${projectInfo.email}
`;
}

module.exports = generateMarkdown;
