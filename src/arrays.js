const { isLessThanOrEqualTo } = require("./booleans");
const { uppercase } = require("./strings");

const getNthElement = (index, array) => {
  // your code here
  return (array[index % array.length])
};

const arrayToCSVString = array => {
  // your code here
    return array.toString()

};

const csvStringToArray = string => {
  // your code here
  return string.split(",")
};

const addToArray = (element, array) => {
  // your code here
    array.push(element);
  
};

const addToArray2 = (element, array) => {
  // your code here
    return array.concat(element)

};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1)

};

const numbersToStrings = numbers => {
  // your code here
    return numbers.map(String);
  
  
};

const uppercaseWordsInArray = strings => {
  // your code here
    return strings.map(string => string.toUpperCase())
  
};

const reverseWordsInArray = strings => {
  // your code here
    return strings.map(string => string.split('').reverse().join(''))
};

function onlyEven(numbers) {
  // your code here

  return numbers.filter(x => x % 2 == 0)

};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter(element => array.indexOf(element) != index);
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(str => /^[aeiou]/i.test(str));
};



const removeSpaces = string => {
  // your code here
  return string.split(" ").join("")
  
};

const sumNumbers = numbers => {
  // your code here
    return (numbers.reduce((x , y) => x+y))
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length - 1));

};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
