import "./styles.css";

let sentence = "Hello class";
let sentSplit = sentence.split(" ");
let joinArray = sentSplit.join(" ");
console.log(sentSplit);
console.log(joinArray);

let arrOne = [1, 2, 3, 4, 5];
//map method
let arrTwo = arrOne.map(function (item) {
  return item + 3;
});

console.log(arrTwo);
let arrThree = arrOne.map((item) => item + 3);
console.log(arrThree);

// filter method
let arrFour = arrOne.filter((item) => item % 3 === 0);
console.log(arrFour);
let arrFive = arrOne.reduce(function (result, item) {
  return result + item;
}, 0);
//0 is the initiator
console.log(arrFive);

//implicit conversion
let b = 6;
let a = "true";

// console.log(a + b);
console.log("6" + b + a);
