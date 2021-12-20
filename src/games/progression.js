import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'What is the result of the expression?';

const getProgression = (firstNumber, commonDifference, progressionLength) => {
  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(firstNumber + (commonDifference * index));
  }
  return progression;
};

const progressionGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const firstNumber = getRandomNumber(100);
    const commonDifference = getRandomNumber(10);
    const progressionLength = 10;
    const progression = getProgression(firstNumber, commonDifference, progressionLength);
    const hiddenIndex = getRandomNumber(10) - 1;
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const answer = hiddenNumber.toString();
    const question = progression.join(' ');
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default progressionGame;
