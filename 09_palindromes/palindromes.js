const palindromes = function (word) {
  if (typeof word === "string") {
    const word2 = word.toLowerCase();
    const myArray = word2.split("");
    let myArray2 = myArray.filter(checkLetter);
    

    function checkLetter(element) {
        return element.length === 1 && element.match(/[a-z]/i);
    }

    
     
    const myArray2Back = [].concat(myArray2).reverse();
    
    let word1 = myArray2.join("");
    let word3 = myArray2Back.join("");


    if (word1 === word3) {
        return true;
    } else {
        return false;
    }
  } else {
    return false;
  }

};

// Do not edit below this line
module.exports = palindromes;
