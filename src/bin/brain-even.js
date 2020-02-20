import readlineSync from 'readline-sync';


// const checkEven = () => {
//   const actual = readlineSync.question('May I have your name?');
//   return actual;
// };
// const compareNumberAndAnswer = (number , answerString) => {
//   return;
// };
const answerToBoolWithCheckErr = (answerString) => {
  switch (answerString) {
    case `yes`:
      return true;
    case `no`:
      return false;
    default:
      return -1;
  }
};
const boolToStringYesOrNo = (bool) => (bool ? `yes` : `no`);
const isEven = (number) => ((number % 2) === 0);
const randomNumber = () => {
  const maxNumber = 100;
  return Math.floor(Math.random() * maxNumber);
};
const telo = (nameUser) => {
  const numberForQuestion = randomNumber();
  console.log(`Question: ${numberForQuestion}`);
  const Answer = readlineSync.question(`Answer: `);
  const numberIsEven = isEven(numberForQuestion);
  if (answerToBoolWithCheckErr(Answer) === numberIsEven) {
    console.log(`Correct!`);
    return true;
  }

  console.log(`${Answer} is wrong answer ;(. Correct answer was ${boolToStringYesOrNo(numberIsEven)} . Let's try again, ${nameUser}!`);
  return false;
};
const start = (nameUser) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  return telo(nameUser) && telo(nameUser) && telo(nameUser) && console.log(`Congratulations, ${nameUser}!`);
};
export default start;
