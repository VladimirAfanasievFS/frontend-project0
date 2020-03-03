
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const isDivisor = (firstNumber, secondNumber) => ((firstNumber % secondNumber) === 0);

const getGCD = (firstOperand, secondOperand) => {
  let divisor = 1;
  const minValue = (firstOperand >= secondOperand) ? firstOperand : secondOperand;
  for (let index = 1; index <= minValue; index += 1) {
    if (isDivisor(firstOperand, index) && isDivisor(secondOperand, index)) {
      divisor = index;
    }
  }
  return divisor;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const operands = [generateRandomNumber(0, 100), generateRandomNumber(0, 80)];
  const gameQuestion = `${operands.join(' ')}`;
  const gameAnswer = getGCD(...operands).toString();
  return {
    gameQuestion,
    gameAnswer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
