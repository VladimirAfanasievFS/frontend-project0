
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateGameData = () => {
  const maxLengthArray = 13;
  const progressionFirstElement = generateRandomNumber(0, 100);
  const progressionArray = [];
  const progressionStep = generateRandomNumber(1, 10);
  for (let index = 0; index < maxLengthArray; index += 1) {
    progressionArray.push(progressionFirstElement + index * progressionStep);
  }

  const firstIndexArray = 0;
  const lastIndexArray = progressionArray.length - 1;
  const indexRandom = generateRandomNumber(firstIndexArray, lastIndexArray);
  const gameAnswer = progressionArray[indexRandom].toString();
  progressionArray[indexRandom] = '..';
  const gameQuestion = progressionArray.join(' ');

  return {
    gameQuestion,
    gameAnswer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
