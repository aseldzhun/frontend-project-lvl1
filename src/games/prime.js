import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const numberSquareRoot = Math.sqrt(number);
  if (number === 0) {
    return false;
  }
  if (number < 4) {
    return true;
  }
  for (let divider = 2; divider <= numberSquareRoot; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = getRandomNumber(100);
    const question = `${number}`;
    const answer = (isPrime(number)) ? 'yes' : 'no';
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default primeGame;
