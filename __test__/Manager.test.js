const Manager = require('../lib/Manager')

test('creates an Manager object', () => {
  const Manager = new Manager('Dave','1','dave@fakemail.com', '1')

  expect(Manager.name).toBe('Dave');
  expect(Manager.id).toBe('1');
  expect(Manager.email).toBe('dave@fakemail.com');
  expect(Manager.officeNumber).toBe('1');
});

test("gets Manager's name", () => {
  const Manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(Manager.getName()).toEqual('Dave');
});

test("gets Manager's id", () => {
  const Manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(Manager.getId()).toEqual('1');
})

test("gets Manager's id", () => {
  const Manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(Manager.getEmail()).toEqual('dave@fakemail.com');
})

test("gets Manager's office number", () => {
  const Manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(Manager.getOfficeNumber()).toEqual('1');
});

test("gets Manager's id", () => {
  const Manager = new Manager('Dave','1','dave@fakemail.com', '1')
  
  expect(Manager.getRole()).toEqual('Manager');
})