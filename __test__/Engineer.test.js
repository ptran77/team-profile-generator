const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () => {
  const engineer = new Engineer('Dave','1','dave@fakemail.com', 'dave7')

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe('1');
  expect(engineer.email).toBe('dave@fakemail.com');
  expect(engineer.github).toBe('dave7');
});

test("gets Engineer's name", () => {
  const engineer = new Engineer('Dave','1','dave@fakemail.com', 'dave7')
  
  expect(engineer.getName()).toEqual('Dave');
});

test("gets Engineer's id", () => {
  const engineer = new Engineer('Dave','1','dave@fakemail.com', 'dave7')
  
  expect(engineer.getId()).toEqual('1');
})

test("gets Engineer's id", () => {
  const engineer = new Engineer('Dave','1','dave@fakemail.com', 'dave7')
  
  expect(engineer.getEmail()).toEqual('dave@fakemail.com');
})

test("gets Engineer's github", () => {
  const engineer = new Engineer('Dave','1','dave@fakemail.com', 'dave7')
  
  expect(engineer.getGithub()).toEqual('dave7');
});

test("gets Engineer's role", () => {
  const engineer = new Engineer('Dave','1','dave@fakemail.com', 'dave7')
  
  expect(engineer.getRole()).toEqual('Engineer');
})