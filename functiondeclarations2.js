// function declaration

function square1(number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

console.log(square1(5, 6)) // 3721


// function expression

const square2 = function (number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

console.log(square2(3, 5)) // 1156


// arrow function 

const square3 = (number1, number2) => {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

console.log(square3(9, 8)) // 21025
