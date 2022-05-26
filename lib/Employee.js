class Employee {
  // Employee constructor 
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // function to get Employee's name
  getName() {
    return this.name;
  }

  // function to get Employee's id
  getId() {
    return this.id;
  }

  // function to get Employee's email
  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;