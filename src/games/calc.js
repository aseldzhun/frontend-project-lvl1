import {
  numOfQuestions, engine,
} from '../index.js';

const taskOfGame = 'What is the result of the expression?';

const evenGame = () => {
  const pairsOfQuestionsAndAnswers = [];
  const operators = ['+', '-', '*'];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * 3)];
    const question = `${numberOne} ${operator} ${numberTwo}`;
    let resultOfExpression;
    switch (operator) {
      case '+':
        resultOfExpression = numberOne + numberTwo;
        break;
      case '-':
        resultOfExpression = numberOne - numberTwo;
        break;
      default:
        resultOfExpression = numberOne * numberTwo;
        break;
    }
    const answer = resultOfExpression.toString();
    pairsOfQuestionsAndAnswers.push([question, answer]);
  }
  engine(taskOfGame, pairsOfQuestionsAndAnswers);
};

export default evenGame;
