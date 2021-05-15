const { callNumber } = require('./scripts/callBingoNumbers');
const { initMap } = require('./utils/map');

const numbers = initMap(3);
console.log('Numbers', numbers);
console.log(callNumber(numbers));
console.log(callNumber(numbers));
console.log(callNumber(numbers));
console.log(callNumber(numbers)); // undefined
console.log('Numbers', numbers);
