
const randomNumber = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);
function sample(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
}

export { randomNumber, sample };
