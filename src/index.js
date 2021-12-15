import readlineSync from 'readline-sync';

export const numOfQuestions = 3;

export const engine = (taskOfGame, pairsOfQuestionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);

  for (let round = 0; round < pairsOfQuestionsAndAnswers.length; round += 1) {
    const [question, answer] = pairsOfQuestionsAndAnswers[round];
    console.log(`Question: ${question}`);
    const receivedAnswer = readlineSync.question('Your answer: ');
    if (receivedAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
