const { callNumber } = require('./scripts/callBingoNumbers');
const { generateBingoCard } = require('./scripts/generateBingoCards');
const { checkBingoCard } = require('./scripts/checkBingoCards');
const { initMap } = require('./utils/map');
const { cardMaxNumber } = require('./constants/bingoCard');

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

// 3. Checking Bingo Cards
const bingoNumbers = initMap(cardMaxNumber);
const calledNumbers = [1, 3, 6, 8, 14,
                        17, 20, 21, 22, 26,
                        31, 34, 36, 40, 43,
                        47, 48, 50, 53, 58,
                        62, 65, 68, 70, 72
                    ];
for (const number of calledNumbers) {
    bingoNumbers.set(number, true);
}
const win = checkBingoCard(bingoNumbers, card);
console.log('Bingo Card Win', win);
