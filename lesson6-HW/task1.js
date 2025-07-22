// Function Declaration
function calculateArea(width, height) {
    const result = width * height;
    return result;
};
 console.log (calculateArea(5, 10));

 //Function expression
const calculateArea2 = function(width, height) {
  return width * height;
};
console.log( calculateArea2(2, 5));

// Arrow Functions
const calculateArea3 = (width, height) => width * height;

console.log( calculateArea3(10, 12));