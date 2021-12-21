import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = getRandomNumber(1, 101);
    const question = String(number);
    const answer = isEven(number) ? 'yes' : 'no';
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default evenGame;
