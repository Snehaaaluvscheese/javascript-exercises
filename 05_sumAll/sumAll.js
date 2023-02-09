const sumAll = function(a, b) {
 let result;
 if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
    result = "ERROR";
    return result;
 } else if (b > a) {
    result = (((b - a + 1)/2) * (a+b));
    return result;
 } else if (a > b) {
    result = (((a - b + 1)/2) * (b+a));
    return result;
 } 
}

// Do not edit below this line
module.exports = sumAll;
