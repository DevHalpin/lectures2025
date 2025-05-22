const array = [1, 2, 3, 4, 5];

const transformFunction = (num) => {
  return num * 2;
}

const transformedArray = array.map(transformFunction);

array.forEach((num) => {
  console.log(num);
});

const filteredArray = array.filter((num) => {
  return num % 2 === 0;
});

console.log(filteredArray); // [2, 4]

console.log(transformedArray); // [2, 4, 6, 8, 10]

const myForEach = (array, cb) => {
    for (const item of array) {
        cb(item);
    }
}

const myMap = (array, cb) => {
  const transformedArr = []
  for (const item of array) {
    const transformedItem = cb(item)
    transformedArr.push(transformedItem)
  }
  return transformedArr
}

console.log(myMap(array, transformFunction))

const myFilterFunction = (num) => {
  return num % 2 === 0;
}

const myFilter = (array, cb) => {
  const transformedArr = []
  for (const item of array) {
    if (cb(item)) {
      transformedArr.push(item)
    }
  }
  return transformedArr
}

console.log(myFilter(array, myFilterFunction ))


