
import startThisGame from '../index.js';
import { randomNumber } from '../lib/utils.js';

function isSimple(number) {
  if (number <= 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if ((number % divisor) === 0) {
      return false;
    }
  }
  return true;
}

const messageGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const dataGame = {
  greeting: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  condition: () => {
    const maxNumber = 100;
    const result = randomNumber(maxNumber);
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
  startThisGame(messageGreeting, dataGame);
};

export default startGame;
