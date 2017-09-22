import thats from './es-module';

const all = require('./cjs-module');

const greetings = `${thats} ${all} folks!`;

class Library {
  sayHello = () => greetings
}

export default new Library();
