// function declaration

function square1(number1, number2) {
  return number1 * number2;
}

square1(5, 6); // 30

console.log(square1(5, 6))

// function expression

const square2 = function (number1, number2) {
  return number1 * number2;
};

square2(5, 6); // 30

console.log(square2(5, 6))

// arrow function 

const square3 = (number1, number2) => {
  return number1 * number2;
}

square3(5, 6); // 30

console.log(square3(5, 6))