const Manager = require('../lib/Manager')

test('creates an Manager object', () => {
  const manager = new Manager('Dave','1','dave@fakemail.com', '1')

  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('1');
  expect(manager.email).toBe('dave@fakemail.com');
  expect(manager.officeNumber).toBe('1');
});

test("gets Manager's name", () => {
  const manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(manager.getName()).toEqual('Dave');
});

test("gets Manager's id", () => {
  const manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(manager.getId()).toEqual('1');
})

test("gets Manager's email", () => {
  const manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(manager.getEmail()).toEqual('dave@fakemail.com');
})

test("gets Manager's office number", () => {
  const manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(manager.getOfficeNumber()).toEqual('1');
});

test("gets Manager's role", () => {
  const manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(manager.getRole()).toEqual('Manager');
})