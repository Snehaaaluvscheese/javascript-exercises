const convertToCelsius = function(temp) {
  let calculation =  (temp - 32) * 5/9
  let result = Math.round(calculation * 10) / 10
  return result;
};

const convertToFahrenheit = function(temp2) {
  let calculation2 = (temp2 * 9/5 + 32)
  let result2 = Math.round(calculation2 * 10) / 10
  return result2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
