import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = getRandomNumber(100);
    const question = number;
    const answer = (isEven(number)) ? 'yes' : 'no';
    roundsData.push([question, answer]);
  }
  engine(taskOfGame, roundsData);
};

export default evenGame;
