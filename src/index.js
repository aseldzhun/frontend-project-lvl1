import readlineSync from 'readline-sync';
import greeting from './cli.js';

export const welcomeToGame = (taskOfGame) => {
  console.log('Welcome to the Brain Games!');
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);
  return name;
};

export const numOfQuestions = 3;

export const round = (name, question, rightAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === rightAnswer) {
    console.log('Correct!');
    return 'right';
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
  return 'wrong';
};
export const congrats = (name) => {
  console.log(`Congratulations, ${name}!`);
};
