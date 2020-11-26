function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

const sumOfFixedNumbers = (fn, array) => {
  let result = 0;
  array.forEach((item) => {
    result += fn(item);
  });
  return result;
};

module.exports = { map, sumOfFixedNumbers };