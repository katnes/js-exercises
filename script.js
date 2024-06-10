//****************************
//String Challenge

// 1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
// 2. The `.toUpperCase()` method will make the entire string uppercase
// 3. `substring()` or `slice()` will return a specific portion of a string

// const myString = "developer";

// let myNewString;

// //Solution 1
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// //Solution 2
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3
// myNewString = `${myString[0].toUpperCase() + myString.substring(1)}`;

// console.log(myNewString);

//****************************
//Number Challenge

// let x = Math.floor(Math.random() * 100 + 1);

// let y = Math.floor(Math.random() * 50 + 1);

// let sum = x + y;
// let sumOutPut = `${x} + ${y} = ${sum}`;

// let difference = x - y;
// let differenceOutPut = `${x} - ${y} = ${difference}`;

// let product = x * y;
// let productOutPut = `${x} * ${y} = ${product}`;

// let quotient = x / y;
// let quotientOutPut = `${x} / ${y} = ${quotient}`;

// let remainder = x % y;
// let remainderOutPut = `${x} % ${y} = ${remainder}`;

// console.log(sumOutPut);
// console.log(differenceOutPut);
// console.log(productOutPut);
// console.log(quotientOutPut);
// console.log(remainderOutPut);

//****************************

//Date and Time Practice
// let d;

// d = new Date();

// d = d.toString();

// d = new Date(2021, 0, 10, 12, 30, 0);
// d = new Date("07/10/2021 12:30");
// d = new Date("2022-07-10");
// d = new Date("07-10-2022");

// d = Date.now();

// d = new Date(1717978810640);

// console.log(d);

// //array literal
// const dogsArr = ['Cipher', 'Pixel'];

// //array constructor
// const dogs = new Array('Cipher', 'Pixel', 'Neo', 'Link');

// let x;

// x = dogs[0];

// x = dogs[0] + dogs[2];

// x = `My current dogs are ${dogsArr[0]} and ${dogsArr[1]}.`;

// dogs[3] = 'Beau';

// x = dogs;

// console.log(dogsArr);
// console.log(dogs);
// console.log(x);

let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(200);

// arr.pop();

// arr.unshift(99);

// arr.shift();

// arr.reverse();

x = arr.includes(200);

x = arr.indexOf(0);

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);
