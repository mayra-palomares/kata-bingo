/**
 * This function generates a Bingo card with 24 random numbers.
 * The card will be a map where the key is the column value(B,I,N,G,O)
 * and the value is an array of the 5 numbers in the column.
 */
const generateBingoCard = () => {
    return new Map();
};

/**
 * This function validates a Bingo card columns.Each column values should be between the lower
 * and upper bounds.
 */
const validateBingoCardColumnBound = card => {
    return true;
};

exports.generateBingoCard = generateBingoCard;
exports.validateBingoCardColumnBound = validateBingoCardColumnBound;
