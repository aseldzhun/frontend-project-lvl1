import {
  engine, numOfQuestions,
} from '../index.js';

const taskOfGame = 'Find the greatest common divisor of given numbers.';

const getGreatestOurDivider = (smallerNumber, biggerNumber) => {
  for (let divider = smallerNumber; divider >= 1; divider -= 1) {
    if (biggerNumber % divider === 0 && smallerNumber % divider === 0) {
      return divider;
    }
  }
  return 1;
};

const gcdGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const numberOne = Math.floor(Math.random() * 100) + 1;
    const numberTwo = Math.floor(Math.random() * 100) + 1;
    const question = `${numberOne} ${numberTwo}`;
    const smallerNumber = (numberOne < numberTwo) ? numberOne : numberTwo;
    const biggerNumber = (numberOne > numberTwo) ? numberOne : numberTwo;
    const greatestOurDivider = getGreatestOurDivider(smallerNumber, biggerNumber);
    const answer = greatestOurDivider.toString();
    roundsData.push([question, answer]);
  }
  engine(taskOfGame, roundsData);
};

export default gcdGame;
