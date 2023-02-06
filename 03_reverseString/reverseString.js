const reverseString = function(text) {
const myArray = text.split("");
myArray.reverse();
let reversedString = myArray.join("");
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
