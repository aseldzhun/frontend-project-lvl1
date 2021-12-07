import {
  welcomeToGame, numOfQuestions, round, congrats,
} from '../index.js';

const evenGame = () => {
  const taskOfGame = 'What is the result of the expression?';
  const name = welcomeToGame(taskOfGame);
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
    const rightAnswer = resultOfExpression.toString();
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
