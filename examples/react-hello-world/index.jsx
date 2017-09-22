import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.getElementById('root');

class HelloWorld {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  rootEl,
);

const helloWorldExample = () => 'Hello World!';

module.exports = helloWorldExample;
