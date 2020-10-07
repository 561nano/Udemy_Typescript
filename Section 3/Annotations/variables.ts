// Type annotations
let apples: number = 5;
// Type inference = number in this case (line 4)
let apples2 = 5;
// Type inference will default to any if it is declared without initialization (Value)
let apples3;
apples3 = 5; // type will still be "Any"

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal
// REMARK: This is probably why interface exist, object literal seam to cluster and unclean for type definition
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// REMARK: this is very messy, function types
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//      When to use annotations
//      1) Function that returns the "any" type
// JSON.parse will give type any, this will cause error if the types are not defined
const json = '{"x": 10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

//      2) When we declare a variable on one line & initalize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // <---- declared type annotation

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//      3) When variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // <---- declared type annotation with multiple types

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
