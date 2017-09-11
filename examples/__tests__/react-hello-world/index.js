const helloWorldExample = require('../../react-hello-world');

test('hello world example should return "Hello World!"', () => {
  expect(helloWorldExample()).toBe('Hello World!');
});
