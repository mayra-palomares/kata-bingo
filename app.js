const { callNumber } = require('./scripts/callBingoNumbers');
const { generateBingoCard } = require('./scripts/generateBingoCards');
const { initMap } = require('./utils/map');

// 1. Calling Bingo Numbers
const numbers = initMap(3);
console.log('Numbers', numbers);
console.log(callNumber(numbers));
console.log(callNumber(numbers));
console.log(callNumber(numbers));
console.log(callNumber(numbers)); // undefined
console.log('Numbers', numbers);

// 2. Generating Bingo Cards
const card = generateBingoCard();
console.log(card);
