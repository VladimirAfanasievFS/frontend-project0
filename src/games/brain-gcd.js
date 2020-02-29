
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const isDivisor = (firstValue, secondValue) => ((firstValue % secondValue) === 0);

const getGCD = (firstValue, secondValue) => {
  let divisor = 1;
  const minValue = (firstValue >= secondValue) ? firstValue : secondValue;
  for (let index = 1; index <= minValue; index += 1) {
    if (isDivisor(firstValue, index) && isDivisor(secondValue, index)) {
      divisor = index;
    }
  }
  return divisor;
};

const description = 'Find the greatest common divisor of given numbers.';
const dataGame = {
  condition: () => {
    const minNumber = 0;
    const maxNumber = 20;
    const firstValue = randomNumber(minNumber, maxNumber);
    const secondValue = randomNumber(minNumber, maxNumber);
    return {
      string: `${firstValue}  ${secondValue}`,
      result: getGCD(firstValue, secondValue),
    };
  },
  checkCondition: (input, answer) => {
    const result = Number(input) === Number(answer);
    return result;
  },
};

const startGame = () => {
  startEngine(description, dataGame);
};

export default startGame;
