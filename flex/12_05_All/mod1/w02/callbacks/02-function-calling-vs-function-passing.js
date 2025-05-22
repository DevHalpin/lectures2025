

const runMyFunction = function(fn) {
  console.log("Before calling the function");
  fn();
  console.log("After calling the function");
}

const myFunction = function() {
  console.log("This is my function");
}

const sayHello = function(name) {
    console.log("Hello " + name);
}

runMyFunction(myFunction);

// sayHello does not have a return value, so it returns undefined
runMyFunction(sayHello);