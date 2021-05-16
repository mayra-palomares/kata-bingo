const { checkBingoCard } = require('./../../scripts/checkBingoCards');
const { cardColumns, cardMaxNumber } = require('./../../constants/bingoCard');
const { initMap } = require('./../../utils/map');

const createBingoNumbersMap = () => {
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
    return bingoNumbers;
};

describe('Check Bingo Cards', () => {
    describe('checkBingoCard', () => {
        it('should return true if all numbers in the card have been called', () => {
            const bingoNumbers = createBingoNumbersMap();
            const card = new Map([
                [cardColumns.B, [1, 3, 6, 8, 14]],
                [cardColumns.I, [17, 20, 21, 22, 26]],
                [cardColumns.N, [31, 34, 0, 40, 43]],
                [cardColumns.G, [47, 48, 50, 53, 58]],
                [cardColumns.O, [62, 65, 68, 70, 72]]
            ]);
            const expectedValue = true;
            expect(checkBingoCard(bingoNumbers, card)).toBe(expectedValue);
        });

        it('should return fall if any number in the card has not been called', () => {
            const bingoNumbers = createBingoNumbersMap();
            const card = new Map([
                [cardColumns.B, [1, 3, 6, 8, 15]],
                [cardColumns.I, [17, 20, 21, 22, 26]],
                [cardColumns.N, [31, 34, 0, 40, 43]],
                [cardColumns.G, [47, 48, 50, 53, 58]],
                [cardColumns.O, [62, 65, 68, 70, 72]]
            ]);
            const expectedValue = false;
            expect(checkBingoCard(bingoNumbers, card)).toBe(expectedValue);
        });
    });
});
