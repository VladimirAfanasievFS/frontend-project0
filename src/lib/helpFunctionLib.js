import { isDivisor } from './predicatesLib.js';

function getGCD(firstValue, secondValue) {
  let divisor = 1;
  const minValue = (firstValue >= secondValue) ? firstValue : secondValue;
  for (let index = 1; index < minValue; index += 1) {
    if (isDivisor(firstValue, index) && isDivisor(secondValue, index)) {
      divisor = index;
    }
  }
  return divisor;
}

function sample(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
}

export { sample, getGCD };
