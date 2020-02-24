
import { isSimple } from '../lib/predicatesLib.js';

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
