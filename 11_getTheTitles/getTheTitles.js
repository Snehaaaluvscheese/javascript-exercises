const getTheTitles = function(word) {
  let myArray = [];
  for (let i =0; i < word.length; i++) {
    myArray.push(word[i]["title"])
  }
  return myArray;
};

// Do not edit below this line
module.exports = getTheTitles;
