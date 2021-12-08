import {
  welcomeToGame, numOfQuestions, round, congrats,
} from '../index.js';

const progressionGame = () => {
  const taskOfGame = 'What is the result of the expression?';
  const name = welcomeToGame(taskOfGame);
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const firstNumber = Math.floor(Math.random() * 100);
    const commonDifference = Math.floor(Math.random() * 10) + 1;
    const progressionLength = 10;
    const progression = [firstNumber];
    for (let index = 1; index < progressionLength; index += 1) {
      progression.push(firstNumber + (commonDifference * index));
    }
    const hiddenIndex = Math.floor(Math.random() * 10);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    const rightAnswer = hiddenNumber.toString();
    const answerIsRight = round(name, question, rightAnswer);
    if (answerIsRight === 'wrong') {
      return;
    }
    if (counter === 3) {
      congrats(name);
    }
  }
};

export default progressionGame;
