import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const taskOfGame = 'What is the result of the expression?';

const getHiddenNumber = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * 10);
  const hiddenNumber = progression[hiddenIndex];
  /* eslint-disable-next-line */
  progression[hiddenIndex] = '..';
  return hiddenNumber.toString();
};

const progressionGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const firstNumber = getRandomNumber(100);
    const commonDifference = getRandomNumber(10);
    const progressionLength = 10;
    const progression = [firstNumber];
    for (let index = 1; index < progressionLength; index += 1) {
      progression.push(firstNumber + (commonDifference * index));
    }
    const answer = getHiddenNumber(progression);
    const question = progression.join(' ');
    roundsData.push([question, answer]);
  }
  engine(taskOfGame, roundsData);
};

export default progressionGame;
