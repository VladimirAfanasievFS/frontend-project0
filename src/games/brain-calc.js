
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const description = 'What is the result of the expression?';

const condition = () => {
  const minNumber = 0;
  const maxNumber = 10;
  const beginIndexArray = 0;
  const operand1 = randomNumber(minNumber, maxNumber);
  const operand2 = randomNumber(minNumber, maxNumber);
  const operator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const arrKeys = Object.keys(operator);
  const randomIndex = randomNumber(beginIndexArray, arrKeys.length);
  const randomOperator = arrKeys[randomIndex];
  const result = operator[randomOperator](operand1, operand2).toString();
  return {
    string: `${operand1} ${randomOperator} ${operand2}`,
    result,
  };
};

const startGame = () => {
  startEngine(description, condition);
};

export default startGame;
