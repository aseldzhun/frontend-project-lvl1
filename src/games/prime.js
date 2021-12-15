import {
  engine, numOfQuestions,
} from '../index.js';

const taskOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 0) {
    return false;
  }
  if (number < 4) {
    return true;
  }
  for (let divider = 2; divider <= (number / 2); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const pairsOfQuestionsAndAnswers = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = `${number}`;
    const answer = (isPrime(number)) ? 'yes' : 'no';
    pairsOfQuestionsAndAnswers.push([question, answer]);
  }
  engine(taskOfGame, pairsOfQuestionsAndAnswers);
};

export default primeGame;
