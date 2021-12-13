import greeting from './cli.js';

const games = () => {
  console.log('Welcome to the Brain Games!');
  const name = greeting();
  console.log(`Hello, ${name}!`);
};

export default games;
