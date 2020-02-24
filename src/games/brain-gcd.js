
import { getGCD } from '../lib/helpFunctionLib.js';

const brainGameData = {
  greeting: 'Find the greatest common divisor of given numbers.',
  condition: () => {
    const maxNumber = 20;
    const firstValue = Math.floor(Math.random() * maxNumber);
    const secondValue = Math.floor(Math.random() * maxNumber);
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

export default brainGameData;
