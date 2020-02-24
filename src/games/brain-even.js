
import { isEven } from '../lib/predicatesLib.js';

const brainGameData = {
  greeting: 'Answer "yes" if the number is even, otherwise answer "no".',
  condition: () => {
    const maxNumber = 100;
    const result = Math.floor(Math.random() * maxNumber);
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

export default brainGameData;
