import readlineSync from 'readline-sync';

export const numOfQuestions = 3;

export const engine = (taskOfGame, pairsOfQuestionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(taskOfGame);

  for (const pairOfQuestionAndAnswer of pairsOfQuestionsAndAnswers) {
    const [question, answer] = pairOfQuestionAndAnswer;
    console.log(`Question: ${question}`);
    const receivedAnswer = readlineSync.question('Your answer: ');
    if (receivedAnswer !== answer) {
      console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
