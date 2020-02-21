import readlineSync from 'readline-sync';

const questWhatYourName = () => {
  const actual = readlineSync.question(`May I have your name? `);
  return actual;
};


const start = (nameGame) => {
  console.log(`Welcome to the Brain Games!`);
  const nameUser = questWhatYourName();
  console.log(`Hi ${nameUser}!`);
  console.log(nameGame.greeting);

  const { condition, checkCondition } = nameGame;

  for (let index = 0; index < 3; index += 1) {
    const condit = condition();
    console.log(`Question:  ${condit.string}`);
    const answer = readlineSync.question(`Answer: `);

    const resultCondition = checkCondition(condit.result, answer);
    if (!resultCondition) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${condit.result}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log(`Correct!`);
  }
  console.log(`Congratulations, ${nameUser}!`);
};
export { questWhatYourName, start };
