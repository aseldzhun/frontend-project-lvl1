import {
  numOfQuestions, engine,
} from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameTask = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const operatorsCount = operators.length;

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
    const numberOne = getRandomNumber(1, 101);
    const numberTwo = getRandomNumber(1, 101);
    const operator = operators[getRandomNumber(0, operatorsCount)];
    const question = `${numberOne} ${operator} ${numberTwo}`;
    const answer = `${getAnswer(numberOne, numberTwo, operator)}`;
    roundsData.push([question, answer]);
  }
  engine(gameTask, roundsData);
};

export default calcGame;
