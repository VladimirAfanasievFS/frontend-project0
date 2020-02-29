import readlineSync from 'readline-sync';

const numberOfRepitions = 3;

const startEngine = (description, dataGame) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nameUser}!`);
  const { condition, checkCondition } = dataGame;
  console.log(description);
  for (let index = 0; index < numberOfRepitions; index += 1) {
    const dataCondition = condition();
    console.log(`Question:  ${dataCondition.string}`);
    const answer = readlineSync.question('Answer: ');
    const resultCondition = checkCondition(dataCondition.result, answer);
    if (!resultCondition) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${dataCondition.result}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};
export default startEngine;
