
import startEngine from '../index.js';
import randomNumber from '../lib/utils.js';

const description = 'What number is missing in the progression?';

const condition = () => {
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
  const result = resultStrArr[indexRandom].toString();
  resultStrArr[indexRandom] = '..';
  return {
    string: resultStrArr.join(' '),
    result,
  };
};

const startGame = () => {
  startEngine(description, condition);
};

export default startGame;
