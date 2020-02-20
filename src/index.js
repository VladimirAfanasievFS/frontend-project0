import readlineSync from 'readline-sync';

const questWhatYourName = () => {
  const actual = readlineSync.question(`May I have your name?`);
  return actual;
};


const checkResult = (conditionBool, answerBool, trueAnswer = `222`, nameUser = `VAAAAAASSSSSSAA`, answer) => {
  if (conditionBool === answerBool) {
    console.log(`Correct!`);
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer} . Let's try again, ${nameUser}!`);
  return false;
};


const start = (nameGame) => {
  console.log(`Welcome to the Brain Games!`);
  const nameUser = questWhatYourName();
  console.log(`Hi ${nameUser}!`);
  console.log(nameGame.greeting);

  for (let index = 0; index < 3; index += 1) {
    const condition = nameGame.condition();
    console.log(`Question: ${condition}`);

    const answer = readlineSync.question(`Answer: `);
    const resultCondition = nameGame.checkCondition(condition);

    const result = checkResult(resultCondition,
      nameGame.answerToBoolWithCheckErr(answer),
      nameGame.trueAnswer(resultCondition),
      nameUser,
      answer);

    if (!result) {
      return;
    }
  }
  console.log(`Congratulations, ${nameUser}!`);
// return nameGame.checkResult({ ...resultObj }) && nameGame.checkResult(resultObj) && nameGame.checkResult(resultObj) && console.log(`Congratulations, ${nameUser}!`);
};
export { questWhatYourName, start };
