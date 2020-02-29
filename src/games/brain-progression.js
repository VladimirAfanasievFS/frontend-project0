
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const description = 'What number is missing in the progression?';
const dataGame = {
  condition: () => {
    const minNumber = 0;
    const maxNumber = 100;
    const beginIndexArray = 0;
    const maxLengthArray = 20;
    const startArr = randomNumber(minNumber, maxNumber);
    const resultStrArr = [];
    for (let index = 1; index < maxLengthArray; index += 2) {
      resultStrArr.push(startArr + index);
    }
    const indexRandom = randomNumber(beginIndexArray, resultStrArr.length);
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
  startEngine(description, dataGame);
};

export default startGame;
