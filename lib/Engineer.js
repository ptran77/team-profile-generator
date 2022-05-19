const Employee = require('./Employee');

class Engineer extends Employee{
  // Engineer constructor
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
  }

  // function to get Engineer's office number
  getGithub() {
    return this.github;
  }

  // function to get Engineer's role
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;