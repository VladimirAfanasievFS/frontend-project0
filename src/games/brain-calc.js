
import { sample } from '../lib/helpFunctionLib.js';

const brainGameData = {
  greeting: 'What is the result of the expression?',
  condition: () => {
    const maxNumber = 10;
    const operand1 = Math.floor(Math.random() * maxNumber);
    const operand2 = Math.floor(Math.random() * maxNumber);
    const operator = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };
    const randomOperator = sample(Object.keys(operator));
    return {
      string: `${operand1} ${randomOperator} ${operand2}`,
      result: operator[randomOperator](operand1, operand2),
    };
  },
  checkCondition: (input, answer) => {
    const result = Number(input) === Number(answer);
    return result;
  },
};

export default brainGameData;
