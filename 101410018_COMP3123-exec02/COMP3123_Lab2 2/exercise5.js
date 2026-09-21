const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);

const product = numbers.reduce((total, number) => total * number, 1);

console.log("Sum:", sum);
console.log("Product:", product);