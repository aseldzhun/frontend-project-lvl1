import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (numberOne, numberTwo) => {
  const smallerNumber = (numberOne < numberTwo) ? numberOne : numberTwo;
  let biggerNumber = (numberOne > numberTwo) ? numberOne : numberTwo;
  if (biggerNumber % smallerNumber === 0) {
    return smallerNumber;
  }
  biggerNumber %= smallerNumber;
  return (getGCD(smallerNumber, biggerNumber));
};

const gcdGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
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
