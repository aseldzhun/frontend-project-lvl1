import {
  numOfQuestions, engine,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const operatorsNumber = operators.length;

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

const calcGame = () => {
  const roundsData = [];
  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const numberOne = getRandomNumber(100);
    const numberTwo = getRandomNumber(100);
    const operator = operators[getRandomNumber(operatorsNumber) - 1];
    const question = `${numberOne} ${operator} ${numberTwo}`;
    const answer = String(getAnswer(numberOne, numberTwo, operator));
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default calcGame;
