
function isSimple(number) {
  if (number === 0 || number === 1) {
    return false;
  }
  for (let index = 2; index <= number; index += 1) {
    if (((number % index) === 0) && (number === index)) {
      return true;
    }
    if ((number % index) === 0) {
      return false;
    }
  }
  return false;
}

const brainGameData = {
  greeting: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  condition: () => {
    const maxNumber = 10;
    const result = Math.floor(Math.random() * maxNumber);


    return {
      string: result,
      result: isSimple(result) ? 'yes' : 'no',
    };
  },
  checkCondition: (input, answer) => {
    const result = (input === answer);
    return result;
  },
};

export default brainGameData;
