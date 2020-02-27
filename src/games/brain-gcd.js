
import startThisGame from '../index.js';

function isDivisor(firstValue, secondValue) {
  return ((firstValue % secondValue) === 0);
}

function getGCD(firstValue, secondValue) {
  let divisor = 1;
  const minValue = (firstValue >= secondValue) ? firstValue : secondValue;
  for (let index = 1; index < minValue; index += 1) {
    if (isDivisor(firstValue, index) && isDivisor(secondValue, index)) {
      divisor = index;
    }
  }
  return divisor;
}

const messageGreeting = 'Find the greatest common divisor of given numbers.';
const dataGame = {
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

const startGame = () => {
  startThisGame(messageGreeting, dataGame);
};

export default startGame;
