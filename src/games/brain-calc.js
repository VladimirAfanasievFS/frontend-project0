
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameDescription = 'What is the result of the expression?';

const generateGameData = () => {
  const operands = [generateRandomNumber(0, 10), generateRandomNumber(0, 15)];
  const operators = Object.keys(calculator);
  const firstIndexArray = 0;
  const lastIndexArray = operators.length - 1;
  const randomIndex = generateRandomNumber(firstIndexArray, lastIndexArray);
  const randomOperator = operators[randomIndex];

  const gameQuestion = `${operands[0]} ${randomOperator} ${operands[1]}`;
  const gameAnswer = calculator[randomOperator](...operands).toString();
  return {
    gameQuestion,
    gameAnswer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
