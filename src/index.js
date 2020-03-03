import readlineSync from 'readline-sync';

const startEngine = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nameUser}!`);
  console.log(gameDescription);

  const numberOfRepitions = 3;
  for (let index = 0; index < numberOfRepitions; index += 1) {
    const { gameQuestion, gameAnswer } = generateGameData();
    console.log(`Question:  ${gameQuestion}`);
    const userAnswer = readlineSync.question('Answer: ');
    const resultCondition = gameAnswer === userAnswer;
    if (!resultCondition) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};
export default startEngine;
