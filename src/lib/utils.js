
const randomNumber = (minNumber = 0, maxNumber = 10) => {
  const min = Math.ceil(minNumber);
  const max = Math.floor(maxNumber);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default randomNumber;
