//This is the ES5 Map Callback
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }


  //This is the ES2015 Arrow Functions Shorthand
 conts double = arr => arr.map(val => val * 2);


 //This is the function to replace with arrow functions
 function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }
  
  //This is the function using arrow functions
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 ===0);