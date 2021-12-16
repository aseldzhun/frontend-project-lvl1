import {
  numOfQuestions, engine,
} from '../index.js';

const taskOfGame = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getAnswer = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return null;
  }
};

const evenGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const operator = operators[Math.floor(Math.random() * 3)];
    const question = `${numberOne} ${operator} ${numberTwo}`;
    const answer = getAnswer(numberOne, numberTwo, operator).toString();
    roundsData.push([question, answer]);
  }
  engine(taskOfGame, roundsData);
};

export default evenGame;
