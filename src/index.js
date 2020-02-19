import readlineSync from 'readline-sync';

const questWhatYourName = () => {
  const actual = readlineSync.question('May I have your name?');
  return actual;
};
export default questWhatYourName;
