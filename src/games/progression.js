import {
  engine, numOfQuestions,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'What is the result of the expression?';

const getProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];
  for (let index = 0; index < progressionLength; index += 1) {
    progression.push(firstNumber + (progressionStep * index));
  }
  return progression;
};

const progressionGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const firstNumber = getRandomNumber(1, 101);
    const progressionStep = getRandomNumber(1, 11);
    const progressionLength = getRandomNumber(5, 16);
    const progression = getProgression(firstNumber, progressionStep, progressionLength);
    const hiddenIndex = getRandomNumber(0, progressionLength);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const answer = `${hiddenNumber}`;
    const question = progression.join(' ');
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default progressionGame;
