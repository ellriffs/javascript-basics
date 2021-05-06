const negate = a => {
  // your code here
    a = !a;
    return a
};

const both = (a, b) => {
  // your code here
return (a && b)
};

const either = (a, b) => {
  // your code here
  return (a || b)
};

const none = (a, b) => {
  // your code here
    return (!a && !b)

};

const one = (a, b) => {
  // your code here
  return (a == !b)
};

const truthiness = a => {
  // your code here
    return !!a

};

function isEqual(a, b) {
  // your code here
  return (a === b);
}

const isGreaterThan = (a, b) => {
  // your code here
return (a > b)

};

const isLessThanOrEqualTo = (a, b) => {
  // your code here

  return (a <= b)
};

const isOdd = a => {
  // your code here
  return a % 2 === 1
};

const isEven = a => {
  // your code here
  return a % 2 === 0
};

const isSquare = a => {
  // your code here

  let sqrt = Math.sqrt(a);
    return a == sqrt*sqrt;
};

const startsWith = (char, string) => {
  // your code here
  return string.startsWith(char)

};

const containsVowels = string => {
  // your code here;
  const vowels = string.toUpperCase();

  return vowels.includes("A") || 
  vowels.includes("E") ||vowels.includes("I") || 
  vowels.includes("O") || vowels.includes("U");

};
  


function isLowerCase(string) {
  // your code here

  return string === string.toLowerCase();

  
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
