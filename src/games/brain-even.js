
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const isEven = (number) => ((number % 2) === 0);


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const dataGame = {
  condition: () => {
    const minNumber = 0;
    const maxNumber = 100;
    const result = randomNumber(minNumber, maxNumber);
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
  startEngine(description, dataGame);
};

export default startGame;
