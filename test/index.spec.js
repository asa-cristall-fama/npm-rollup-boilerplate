import library from '../src';

test('library should return "That\'s all folks!"', () => {
  expect(library.sayHello()).toBe('That\'s all folks!');
});
