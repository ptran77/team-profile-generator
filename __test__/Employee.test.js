const Employee = require('../lib/Employee')

test('creates an Employee object', () => {
  const employee = new Employee('Dave','1','dave@fakemail.com')

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe('1');
  expect(employee.email).toBe('dave@fakemail.com');
});

test("gets employee's name", () => {
  const employee = new Employee('Dave','1','dave@fakemail.com')
  
  expect(employee.getName()).toEqual('Dave');
});

test("gets employee's id", () => {
  const employee = new Employee('Dave','1','dave@fakemail.com')
  
  expect(employee.getId()).toEqual('1');
})

test("gets employee's email", () => {
  const employee = new Employee('Dave','1','dave@fakemail.com')
  
  expect(employee.getEmail()).toEqual('dave@fakemail.com');
})

test("gets employee's role", () => {
  const employee = new Employee('Dave','1','dave@fakemail.com')
  
  expect(employee.getRole()).toEqual('Employee');
})