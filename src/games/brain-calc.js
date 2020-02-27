
import startThisGame from '../index.js';
import { randomNumber, sample } from '../lib/utils.js';

const messageGreeting = 'What is the result of the expression?';
const dataGame = {
  condition: () => {
    const maxNumber = 10;
    const operand1 = randomNumber(maxNumber);
    const operand2 = randomNumber(maxNumber);
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

const startGame = () => {
  startThisGame(messageGreeting, dataGame);
};

export default startGame;
