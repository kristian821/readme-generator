
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  switch (license) {
    case 'MIT License':
      return ``
  }
}


// Create contributions section, If no contributions, return an empty string
const contributeSection = contributeText => {
  if (!contributeText) {
    return '';
  }

  return `
  ## Contributions

  ${contributeText}
   `
}

// Create a 'Tests' section, If no tests, return an empty string
const tests = testText => {
  if (!testText) {
    return '';
  }

  return `
  ## Tests

  ${testText}

  `
}

const image = (altName, path) => {
  if (!path) {
    return '';
  }

  return `![${altName}](${path})`
}


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const projectInfo = data;

  return `
  # ${projectInfo.title}

  ## Description
    ${projectInfo.description}
  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributions](#contributions)
  *[Tests](#tests)
  *[License](#license)

  ## Installation
    ${projectInfo.instructions}

  ## Usage
    ${image(projectInfo.title, projectInfo.image)}
    ${projectInfo.usage}

    ${contributeSection(projectInfo.contributions)}
     
    ${tests(projectInfo.tests)}

  ## License

    ${renderLicenseSection(projectInfo.license)}

  ## Questions
    [GitHub](https://github.com/${projectInfo.github}/)

    Email Me at ${projectInfo.email}
`;
}

module.exports = generateMarkdown;
