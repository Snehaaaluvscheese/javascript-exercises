const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sumArray) {
  let sumArray2 = Array.from(sumArray);
	if (sumArray2.length === 0) {
    return 0;
  } else if (!(sumArray2.length === 0)) {
    
    const sum = sumArray2.reduce((acc, curr) => {
      return acc + curr
    }, 0);
    return sum;
    
  }
};

const multiply = function(multArray) {
    let multArray2 = Array.from(multArray);
    const theProduct = multArray2.reduce((acc, curr) => {
      return acc * curr
    }, 1);
    return theProduct;
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(fact) {
	if (fact === 0) {
    return 1;
  } else {
    const myArray = Array.from({length: fact}, (_, i) => i + 1)
    const myArray2 = myArray.reduce((acc, curr) => {
      return acc * curr;
    })
    return myArray2;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
