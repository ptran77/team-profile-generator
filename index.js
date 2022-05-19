// Team Roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// node modules
const inquirer = require('inquirer');

// team members array
const teamMembers = []

// function to validate emails
const validateEmail = email => {
  const emailFormat = /\S+@\S+\.\S+/;
  return emailFormat.test(email);
}

const getManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is your manager's name? (Required)",
      validate: nameInput => {
        if (nameInput) return true;
        else {
          console.log("You need to enter your manager's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your manager's id? (Required)",
      validate: idInput => {
        if(idInput) return true;
        else {
          console.log("You need to enter your manager's id.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your manager's email? (Required)",
      validate: emailInput => {
        if(validateEmail(emailInput)) return true;
        else {
          console.log("You need to enter your manager's email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is your manager's office number? (Required)",
      validate: officeNumber => {
        // checking that the input is an actual number
        if(!isNaN(officeNumber)) return true;
        else {
          console.log("You need to put your manager's office number.");
          return false;
        }
      }
    }
  ])
  .then(managerData => {
    // creating Manager object and addd to team members array
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
  })
};

getManager();