
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const isEven = (number) => ((number % 2) === 0);


const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const gameQuestion = generateRandomNumber(0, 100);
  const gameAnswer = (isEven(gameQuestion) ? 'yes' : 'no');
  return {
    gameQuestion,
    gameAnswer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
