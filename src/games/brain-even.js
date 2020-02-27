
import startThisGame from '../index.js';
import { randomNumber } from '../lib/utils.js';

function isEven(number) {
  return ((number % 2) === 0);
}

const messageGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const dataGame = {
  condition: () => {
    const maxNumber = 100;
    const result = randomNumber(maxNumber);
    return {
      string: result,
      result: (isEven(result) ? 'yes' : 'no'),
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
