const { callNumber } = require('./../../scripts/callBingoNumbers');

describe('Call Bingo Numbers', () => {
    describe('callNumber', () => {
        it('should return undefined if all numbers were called', () => {
            const numbersMap = new Map([
                [1, true], [2, true], [3, true], [4, true], [5, true]
            ]);
            const expectedNumber = undefined;
            expect(callNumber(numbersMap)).toEqual(expectedNumber);
        });

        it('should return a number if there are available numbers to call', () => {
            const numbersMap = new Map([
                [1, true], [2, true], [3, true], [4, false], [5, true]
            ]);
            const expectedNumber = 4;
            expect(callNumber(numbersMap)).toEqual(expectedNumber);
        });

        it('should be able to call all numbers in the map', () => {
            const numbersMap = new Map([
                [1, false], [2, false], [3, false], [4, false], [5, false]
            ]);
            const expectedNumbersMap = new Map([
                [1, true], [2, true], [3, true], [4, true], [5, true]
            ]);
            callNumber(numbersMap);
            callNumber(numbersMap);
            callNumber(numbersMap);
            callNumber(numbersMap);
            callNumber(numbersMap);
            expect(numbersMap).toEqual(expectedNumbersMap);
        });
    });
});
