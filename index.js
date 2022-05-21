// Team Roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// node modules
const inquirer = require('inquirer');

// team members array
const teamMembers = [];

// function to validate emails
const validateEmail = email => {
  const emailFormat = /\S+@\S+\.\S+/;
  return emailFormat.test(email);
}

// function to get Manager info and store into team member array
const getManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name? (Required)",
      validate: nameInput => {
        if (nameInput) return true;
        else {
          console.log("You need to enter the manager's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's id? (Required)",
      validate: idInput => {
        if(idInput) return true;
        else {
          console.log("You need to enter the manager's id.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email? (Required)",
      validate: emailInput => {
        if(validateEmail(emailInput)) return true;
        else {
          console.log("You need to enter the manager's email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number? (Required)",
      validate: officeNumber => {
        // checking that the input is an actual number
        if(!isNaN(officeNumber)) return true;
        else {
          console.log("You need to put the manager's office number.");
          return false;
        }
      }
    }
  ])
  .then(managerData => {
    // creating Manager object and add to team members array
    const {name, id, email, officeNumber} = managerData;
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.push(manager);
  })
};


// function to get all employees and get their profile into the team member array
const getEmployees = () => {
  console.log(`
===================
Adding Team Members
==================
`);
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Who would do you want to add?",
      choices: ['Engineer', 'Intern', 'None']
      
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the member's name? (Required)",
      when: (input) => input.role !== 'None',
      validate: nameInput => {
        if (nameInput) return true;
        else {
          console.log("You need to enter the team member's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your member's id? (Required)",
      when: (input) => input.role !== 'None',
      validate: idInput => {
        if (idInput) return true;
        else {
          console.log("You need to enter the team member's id.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the member's email? (Required)",
      when: (input) => input.role !== 'None',
      validate: emailInput => {
        if(validateEmail(emailInput)) return true;
        else {
          console.log("You need to enter the member's email.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's github? (Required)",
      when: (input) => input.role === 'Engineer',
      validate: githubInput => {
        if (githubInput) return true;
        else {
          console.log("You need to enter the engineer's github.")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the intern's school? (Required)",
      when: (input) => input.role === 'Intern',
      validate: schoolInput => {
        if (schoolInput) return true;
        else {
          console.log("You need to enter the intern's school.")
          return false;
        }
      }
    }
  ])
  .then(memberData => {
    const {role} = memberData;
    if(role === 'Engineer') {
      const {name, id, email, github} = memberData;
      const engineer = new Engineer(name, id, email, github);
      teamMembers.push(engineer);
    }
    else if(role === 'Intern') {
      const {name, id, email, school} = memberData;
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
    }
    if(role !== 'None') getMembers();
    else return teamMembers;
  });
}

getManager().then(getEmployees);
