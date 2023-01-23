// Q1 print output.
//     function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());//1
// alert(counter());//2
// alert(counter());//3
// alert(counter());//4

//Q2 print output
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?//1
  }
  console.log(count); // What is logged?//0
})();
//Q3 print output
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?//
    }, 1000);
  }
  //o/p
  //1
  //0
  //3
  //3
  //3

//Q4 Write a code to calculate area of a rectangle using inner function. In this case outer function 
//should accept parameter length and inner function should accept parameter breadth.
//ans
function calculateArea(length) {
    return function(breadth) {
      return length * breadth;
    }
  }
  
  var area = calculateArea(5);
  console.log(area(10));

//Q5 Take a variable in outer function 
//and create an inner function to increase the counter every time it is called.
//ans
function outerFunction() {
    let counter = 0;
    return function innerFunction() {
      counter++;
      return counter;
    }
  }
  
  let increaseCounter = outerFunction();
  console.log(increaseCounter());
  console.log(increaseCounter());
  console.log(increaseCounter());

  //Q6 Print Output

var a = 12;
(function () {
  alert(a);
})();
//ans-12

//Q7 print output
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
//ans 12

//Q8 print output
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
// ans
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz