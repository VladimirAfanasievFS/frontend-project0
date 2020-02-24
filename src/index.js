import readlineSync from 'readline-sync';

const greetingStart = () => {
  console.log('Welcome to the Brain Games!');
};

const questWhatYourName = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hi ${nameUser}!`);
  return nameUser;
};

const startGame = (nameGame) => {
  greetingStart();
  const nameUser = questWhatYourName();
  const { greeting, condition, checkCondition } = nameGame;

  for (let index = 0; index < 3; index += 1) {
    const condit = condition();
    console.log(greeting);
    console.log(`Question:  ${condit.string}`);
    const answer = readlineSync.question('Answer: ');

    const resultCondition = checkCondition(condit.result, answer);
    if (!resultCondition) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${condit.result}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};
export { greetingStart, questWhatYourName, startGame };
