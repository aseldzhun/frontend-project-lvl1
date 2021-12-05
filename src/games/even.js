import readlineSync from 'readline-sync';
import greeting from '../cli.js';

const evenGame = () => {
  const name = greeting();
  const numOfQuestions = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let counter = 1; counter <= numOfQuestions; counter += 1) {
    const number = Math.floor(Math.random() * 100);
    const numberIsEven = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === numberIsEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${numberIsEven}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
