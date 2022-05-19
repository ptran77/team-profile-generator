const Employee = require('./Employee');

class Intern extends Employee{
  // Intern constructor
  constructor(name, id, email, school){
    super(name, id, email);
    this.school = school;
  }

  // function to get Intern's school
  getSchool() {
    return this.school;
  }

  // function to get Intern's role
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;