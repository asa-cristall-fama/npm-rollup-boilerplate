import library from '../src';

test('library should return "That\'s all folks!"', () => {
  expect(library()).toBe('That\'s all folks!');
});
