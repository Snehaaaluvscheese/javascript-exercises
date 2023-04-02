const fibonacci = function(number) {
  
    if (number < 0) {
        return "OOPS";
    } else if (number > 0) {
        
      let n1 = 0;
      let n2 = 1;
      let nextTerm;
      let myArray = [];

      for (let i = 1; i <= number; i++) {
      
       nextTerm = n1 + n2;
       myArray.push(nextTerm);
       n1 = n2;
       n2 = nextTerm;
  }
  myArray.unshift(1);
  let position = number - 1;

  return (myArray[position]);
   
    
    
    
  }

};

// Do not edit below this line
module.exports = fibonacci;
