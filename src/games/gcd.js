import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberOne, numberTwo) => {
  if (!numberTwo) {
    return numberOne;
  }
  return (getGCD(numberTwo, numberOne % numberTwo));
};

const gcdGame = () => {
  const roundsData = [];
  for (let counter = 0; counter < numOfQuestions; counter += 1) {
    const numberOne = getRandomNumber(1, 101);
    const numberTwo = getRandomNumber(1, 101);
    const question = `${numberOne} ${numberTwo}`;
    const greatestOurDivider = getGCD(numberOne, numberTwo);
    const answer = greatestOurDivider.toString();
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default gcdGame;
