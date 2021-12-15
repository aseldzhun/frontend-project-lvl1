import {
  engine, numOfQuestions,
} from '../index.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const pairsOfQuestionsAndAnswers = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const question = Math.floor(Math.random() * 100) + 1;
    const answer = (question % 2 === 0) ? 'yes' : 'no';
    pairsOfQuestionsAndAnswers.push([question, answer]);
  }
  engine(taskOfGame, pairsOfQuestionsAndAnswers);
};

export default evenGame;
