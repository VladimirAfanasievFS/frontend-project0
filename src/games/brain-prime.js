
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const isSimple = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if ((number % divisor) === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const dataGame = {
  condition: () => {
    const minNumber = 0;
    const maxNumber = 100;
    const result = randomNumber(minNumber, maxNumber);
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

const startGame = () => {
  startEngine(description, dataGame);
};

export default startGame;
