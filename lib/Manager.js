const Employee = require('./Employee');

class Manager extends Employee{
  // Manager constructor
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // function to get manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // function to get manager's role
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;