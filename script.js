// 1. You can use the `charAt()` method as well as `string[index]` to get the character at a specific index.
// 2. The `.toUpperCase()` method will make the entire string uppercase
// 3. `substring()` or `slice()` will return a specific portion of a string

const myString = "developer";

let myNewString;

//Solution 1
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//Solution 2
myNewString = myString[0].toUpperCase() + myString.substring(1);
// Solution 3
myNewString = `${myString[0].toUpperCase() + myString.substring(1)}`;

console.log(myNewString);
