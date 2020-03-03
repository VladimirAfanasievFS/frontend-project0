
import startEngine from '../index.js';
import generateRandomNumber from '../lib/utils.js';

const isSimple = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let divisor = 2; divisor < number; divisor += 1) {
    if ((number % divisor) === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const gameQuestion = generateRandomNumber(0, 100);
  const gameAnswer = isSimple(gameQuestion) ? 'yes' : 'no';
  return {
    gameQuestion,
    gameAnswer,
  };
};

const startGame = () => {
  startEngine(gameDescription, generateGameData);
};

export default startGame;
