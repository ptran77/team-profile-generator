const Intern = require('../lib/Intern')

test('creates an Intern object', () => {
  const intern = new Intern('Dave','1','dave@fakemail.com', 'fakeUniversity')

  expect(intern.name).toBe('Dave');
  expect(intern.id).toBe('1');
  expect(intern.email).toBe('dave@fakemail.com');
  expect(intern.school).toBe('fakeUniversity');
});

test("gets Intern's name", () => {
  const intern = new Intern('Dave','1','dave@fakemail.com', 'fakeUniversity')
  
  expect(intern.getName()).toEqual('Dave');
});

test("gets Intern's id", () => {
  const intern = new Intern('Dave','1','dave@fakemail.com', 'fakeUniversity')
  
  expect(intern.getId()).toEqual('1');
})

test("gets Intern's id", () => {
  const intern = new Intern('Dave','1','dave@fakemail.com', 'fakeUniversity')
  
  expect(intern.getEmail()).toEqual('dave@fakemail.com');
})

test("gets Intern's school", () => {
  const intern = new Intern('Dave','1','dave@fakemail.com', 'fakeUniversity')
  
  expect(intern.getSchool()).toEqual('fakeUniversity');
});

test("gets Intern's role", () => {
  const intern = new Intern('Dave','1','dave@fakemail.com', 'fakeUniversity')
  
  expect(intern.getRole()).toEqual('Intern');
})