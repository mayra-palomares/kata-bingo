/**
 * This function checks if a Bingo card win. A card wins when all the numbers in the card have been called.
 * @returns boolean
 */
const checkBingoCard = (bingoNumbers, card) => {
    let win = true;
    card.forEach((values, key) => {
        if (win) {
            for (const number of values) {
                // If it's not the free space and the number hasn't been called
                if (number !== 0 && !bingoNumbers.get(number)) {
                    win = false;
                    break;
                }
            }
        }
    });
    return win;
};

exports.checkBingoCard = checkBingoCard;
