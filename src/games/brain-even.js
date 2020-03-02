
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const isEven = (number) => ((number % 2) === 0);


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const condition = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const resultString = randomNumber(minNumber, maxNumber);
  const result = (isEven(resultString) ? 'yes' : 'no');
  return {
    string: resultString,
    result,
  };
};

const startGame = () => {
  startEngine(description, condition);
};

export default startGame;
