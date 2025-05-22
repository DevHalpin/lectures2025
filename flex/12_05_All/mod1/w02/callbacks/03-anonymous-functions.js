// const myFunction = function() {
//   console.log("This is my function");
// }

// Arrow function version of the above (more modern syntax)
// const myFunction = () => {
//   console.log("This is my function");
// }

const myParam = "Bob";

const sayHello = function(name) {
    console.log("Hello " + name);
}

// Functions that call other functions are called higher order functions
// The function that is passed in is called a callback function
const runMyFunction = function(fn) {
  console.log("Before calling the function");
  fn(myParam);
  console.log("After calling the function");
}

// Higher order function calling an anonymous function
runMyFunction((myParam) => {
  console.log("This is my function", myParam);
});

// Higher order function calling an anonymous function that calls another function
runMyFunction((whatever) => {
    sayHello(whatever);
});