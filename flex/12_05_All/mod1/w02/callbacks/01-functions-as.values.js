
//function declaration
function sayHello() {
    console.log("Hello");
}

//function expression
const sayGoodbye = function() {
    console.log("Goodbye");
}

sayGoodbye();

const somethingElse = sayGoodbye;

somethingElse();

somethingElse.secretPhrase = "I'm a secret";
console.log(somethingElse.secretPhrase);