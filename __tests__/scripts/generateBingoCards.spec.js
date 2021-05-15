const { generateBingoCard, validateBingoCardColumnBound } = require('./../../scripts/generateBingoCards');
const { cardColumns } = require('./../../constants/bingoCard');

describe('Generate Bingo Cards', () => {
    describe('generateBingoCard', () => {
        it('should generate a card with 24 different numbers and one 0 for the free space', () => {
            const card = generateBingoCard();
            const numbersSet = new Set();
            card.forEach((values, key) => {
                values.forEach(value => numbersSet.add(value));
            });

            expect(numbersSet.size).toBe(25);
        });

        it('should generate a card considering each column lower and upper bound', () => {
            const card = generateBingoCard();
            const expectedValue = true;
            expect(validateBingoCardColumnBound(card)).toBe(expectedValue);
        });

        it('should generate a card with one free space in the middle', () => {
            const card = generateBingoCard();
            const values = card.get(cardColumns.N);
            const expectedValue = 0;
            expect(values[2]).toBe(expectedValue);
        });
    });

    describe('validateBingoCardColumnBound', () => {
        it('should return true if each column value is between the lower and upper bound', () => {
            const card = new Map([
                [cardColumns.B, [1, 4, 6, 8, 15]],
                [cardColumns.I, [16, 20, 25, 27, 30]],
                [cardColumns.N, [31, 35, 0, 40, 45]],
                [cardColumns.G, [46, 49, 51, 55, 60]],
                [cardColumns.O, [61, 65, 67, 70, 75]]
            ]);
            const expectedValue = true;
            expect(validateBingoCardColumnBound(card)).toBe(expectedValue);
        });

        it('should return false if each column value is not between the lower and upper bound', () => {
            const card = new Map([
                [cardColumns.B, [1, 4, 6, 8, 16]],
                [cardColumns.I, [16, 20, 25, 35, 30]],
                [cardColumns.N, [31, 35, 0, 40, 45]],
                [cardColumns.G, [46, 49, 51, 55, 60]],
                [cardColumns.O, [61, 65, 67, 70, 75]]
            ]);
            const expectedValue = false;
            expect(validateBingoCardColumnBound(card)).toBe(expectedValue);
        });
    });
});
