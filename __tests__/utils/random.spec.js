const { getRandomInteger } = require('./../../utils/random');

describe('Random Util', () => {
    describe('getRandomInteger', () => {
        it('should return random integer if range is valid', () => {
            const minValue = 5;
            const maxValue = 5;
            const expectedNumber = 5;
            expect(getRandomInteger(minValue, maxValue)).toBe(expectedNumber);
        });
    });
});
