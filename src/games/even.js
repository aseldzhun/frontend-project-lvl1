import {
  welcomeToGame, numOfQuestions, round, congrats,
} from '../index.js';

const evenGame = () => {
  const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const name = welcomeToGame(taskOfGame);
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
    const answerIsRight = round(name, question, rightAnswer);
    if (answerIsRight === 'wrong') {
      return;
    }
    if (counter === 3) {
      congrats(name);
    }
  }
};

export default evenGame;
