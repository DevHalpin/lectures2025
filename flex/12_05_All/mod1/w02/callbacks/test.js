const array = [1, 2, 4, 8];
//map - Loops an array and returns a new array with the same length but with each element transformed
// const alteredArray = array.map((num) => num + 2);
//filter - Loops an array and returns a new array with only the elements that pass the test
// const filterArr = array.filter((num) => num > 2);
// //some - returns true if at least one element in your array passes the test, otherwise return false
// const boolean = array.some((num) => num % 3 === 0);

// Our own versions of map, filter, and some

const myMap = function (arr, callback) {
  const result = [];
  for (const element of arr) {
    result.push(callback(element));
  }
  return result;
};

const myFilter = function (arr, callback) {
  const result = [];
  for (const element of arr) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
};

const mySome = function (arr, callback) {
  for (const element of arr) {
    
    if (callback(element)) {
      return true;
    }
  }
  return false;
};

// What is the value of the following expressions?

const value4 = mySome(
  myMap(
    myFilter(array, (num) => num > 2),
    (num) => num + 3
  ),
  (num) => num % 3 === 0
);

// Same as above but using the built-in array methods chained together
// const value4 = array.filter((num) => num > 2).map((num) => num + 3).some((num) => num % 3 === 0)

console.log(value4);
