const removeFromArray = function(array1 , ...theArgs) {
    return array1.filter(val => !theArgs.includes(val));
    
}
// Do not edit below this line
module.exports = removeFromArray;
