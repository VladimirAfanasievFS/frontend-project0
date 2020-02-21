#!/usr/bin/env node

import { greetingStart, questWhatYourName, startGame } from '../../index.js';

function sample(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
}
const brainGameData = {
  greeting: `What number is missing in the progression?`,
  condition: () => {
    const maxNumber = 10;
    const maxLengthArray = 10;
    const startArr = Math.floor(Math.random() * maxNumber);
    const resultStrArr = [];
    for (let index = 1; index < maxLengthArray; index += 2) {
      resultStrArr.push(startArr + index);
    }
    const indexRandom = resultStrArr.indexOf(sample(resultStrArr));
    const result = resultStrArr[indexRandom];
    resultStrArr[indexRandom] = `..`;
    return {
      string: resultStrArr.join(` `),
      result,
    };
  },
  checkCondition: (input, answer) => {
    const result = Number(input) === Number(answer);
    return result;
  },
};

greetingStart();
startGame(questWhatYourName(), brainGameData);
