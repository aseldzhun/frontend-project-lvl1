import {
  welcomeToGame, numOfQuestions, round, congrats,
} from '../index.js';

const isPrime = (number) => {
  if (number === 0) {
    return 'no';
  }
  if (number < 4) {
    return 'yes';
  }
  for (let divider = 2; divider <= (number / 2); divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = () => {
  const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const name = welcomeToGame(taskOfGame);
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = `${number}`;
    const rightAnswer = isPrime(number).toString();
    const answerIsRight = round(name, question, rightAnswer);
    if (answerIsRight === 'wrong') {
      return;
    }
    if (counter === 3) {
      congrats(name);
    }
  }
};

export default primeGame;
