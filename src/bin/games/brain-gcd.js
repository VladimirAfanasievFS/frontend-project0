#!/usr/bin/env node

import { greetingStart, questWhatYourName, startGame } from '../../index.js';

function is(firstValue, secondValue) {
  return ((firstValue % secondValue) === 0);
}
function getGCD(firstValue, secondValue) {
  let divisor = 1;
  const minValue = (firstValue >= secondValue) ? firstValue : secondValue;
  for (let index = 1; index < minValue; index += 1) {
    if (is(firstValue, index) && is(secondValue, index)) {
      divisor = index;
    }
  }
  return divisor;
}

const brainGameData = {
  greeting: `Find the greatest common divisor of given numbers.`,
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

greetingStart();
startGame(questWhatYourName(), brainGameData);
