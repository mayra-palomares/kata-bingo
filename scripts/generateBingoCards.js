const { cardBounds, cardColumns } = require('./../constants/bingoCard');
const { getRandomInteger } = require('../utils/random');
/**
 * This function generates a Bingo card with 24 random numbers.
 * The card will be a map where the key is the column value(B,I,N,G,O)
 * and the value is an array of the 5 numbers in the column.
 */
const generateBingoCard = () => {
    const card = new Map();
    cardBounds.forEach(({ lowerBound, upperBound }, column) => {
        const numbers = generateCardValues(column, lowerBound, upperBound);
        card.set(column, numbers);
    });
    return card;
};

/**
 * This function generates an array of 5 values with the numbers between a column boundaries.
 */
const generateCardValues = (column, lowerBound, upperBound) => {
    const numbers = [];
    do {
        if (column === cardColumns.N && numbers.length === 2) {
            numbers.push(0);
        } else {
            const num = getRandomInteger(lowerBound, upperBound);
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
    } while (numbers.length < 5);
    return numbers;
};

/**
 * This function validates a Bingo card columns.Each column values should be between the lower
 * and upper bounds.
 */
const validateBingoCardColumnBound = card => {
    let isValid = true;
    card.forEach((values, key) => {
        const { lowerBound, upperBound } = cardBounds.get(key);
        if (isValid) {
            for (let i = 0; i < values.length; i++) {
                const value = values[i];
                if (key !== cardColumns.N || i !== 2) {
                    isValid = value >= lowerBound && value <= upperBound;
                }
            }
        }
    });
    return isValid;
};

exports.generateBingoCard = generateBingoCard;
exports.validateBingoCardColumnBound = validateBingoCardColumnBound;
