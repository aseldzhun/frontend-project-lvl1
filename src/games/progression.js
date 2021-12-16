import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const taskOfGame = 'What is the result of the expression?';

const getProgression = () => {
  const firstNumber = getRandomNumber(100);
  const commonDifference = getRandomNumber(10);
  const progressionLength = 10;
  const progression = [firstNumber];
  for (let index = 1; index < progressionLength; index += 1) {
    progression.push(firstNumber + (commonDifference * index));
  }
  return progression;
};

const progressionGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const progression = getProgression();
    const hiddenIndex = getRandomNumber(10) - 1;
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const answer = hiddenNumber.toString();
    const question = progression.join(' ');
    roundsData.push([question, answer]);
  }
  engine(taskOfGame, roundsData);
};

export default progressionGame;
