
function isEven(number) {
  return ((number % 2) === 0);
}

function isDivisor(firstValue, secondValue) {
  return ((firstValue % secondValue) === 0);
}
function isSimple(number) {
  if (number === 0 || number === 1) {
    return false;
  }
  for (let index = 2; index <= number; index += 1) {
    if (((number % index) === 0) && (number === index)) {
      return true;
    }
    if ((number % index) === 0) {
      return false;
    }
  }
  return false;
}

export { isSimple, isDivisor, isEven };
