import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGreatestOurDivider = (numberOne, numberTwo) => {
  const smallerNumber = (numberOne < numberTwo) ? numberOne : numberTwo;
  let biggerNumber = (numberOne > numberTwo) ? numberOne : numberTwo;
  if (smallerNumber === biggerNumber) {
    return smallerNumber;
  }
  biggerNumber -= smallerNumber;
  return (getGreatestOurDivider(smallerNumber, biggerNumber));
};

const gcdGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);
    const question = `${numberOne} ${numberTwo}`;
    const greatestOurDivider = getGreatestOurDivider(numberOne, numberTwo);
    const answer = greatestOurDivider.toString();
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default gcdGame;
