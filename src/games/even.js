import {
  engine, numOfQuestions,
} from '../index.js';

const taskOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = () => {
  const pairsOfQuestionsAndAnswers = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = number;
    const answer = (isEven(number)) ? 'yes' : 'no';
    pairsOfQuestionsAndAnswers.push([question, answer]);
  }
  engine(taskOfGame, pairsOfQuestionsAndAnswers);
};

export default evenGame;
