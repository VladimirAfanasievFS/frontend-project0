
const brainGameData = {
  greeting: `Answer "yes" if the number is even, otherwise answer "no".`,
  condition: () => {
    const maxNumber = 100;
    return Math.floor(Math.random() * maxNumber);
  },
  answerToBoolWithCheckErr: (answerString) => {
    switch (answerString) {
      case `yes`:
        return true;
      case `no`:
        return false;
      default:
        return -1;
    }
  },
  checkCondition: (number) => ((number % 2) === 0),
  trueAnswer: (bool) => (bool ? `yes` : `no`),
};

export default brainGameData;
