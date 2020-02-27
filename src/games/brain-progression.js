
import startThisGame from '../index.js';
import { randomNumber, sample } from '../lib/utils.js';

const messageGreeting = 'What number is missing in the progression?';
const dataGame = {
  condition: () => {
    const maxNumber = 100;
    const maxLengthArray = 20;
    const startArr = randomNumber(maxNumber);
    const resultStrArr = [];
    for (let index = 1; index < maxLengthArray; index += 2) {
      resultStrArr.push(startArr + index);
    }
    const indexRandom = resultStrArr.indexOf(sample(resultStrArr));
    const result = resultStrArr[indexRandom];
    resultStrArr[indexRandom] = '..';
    return {
      string: resultStrArr.join(' '),
      result,
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
