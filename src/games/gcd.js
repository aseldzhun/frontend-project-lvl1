import {
  engine, numOfQuestions,
} from '../index.js';

const getGreatestOurDivider = (smallerNumber, biggerNumber) => {
  for (let divider = smallerNumber; divider >= 1; divider -= 1) {
    if (biggerNumber % divider === 0 && smallerNumber % divider === 0) {
      return divider;
    }
  }
  return 1;
};

const gcdGame = () => {
  const taskOfGame = 'Find the greatest common divisor of given numbers.';
  const pairsOfQuestionsAndAnswers = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const numberOne = Math.floor(Math.random() * 100) + 1;
    const numberTwo = Math.floor(Math.random() * 100) + 1;
    const question = `${numberOne} ${numberTwo}`;
    const smallerNumber = (numberOne < numberTwo) ? numberOne : numberTwo;
    const biggerNumber = (numberOne > numberTwo) ? numberOne : numberTwo;
    const greatestOurDivider = getGreatestOurDivider(smallerNumber, biggerNumber);
    const answer = greatestOurDivider.toString();
    pairsOfQuestionsAndAnswers.push([question, answer]);
  }
  engine(taskOfGame, pairsOfQuestionsAndAnswers);
};

export default gcdGame;
