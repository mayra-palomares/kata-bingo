const { getRandomInteger } = require('./../../utils/random');

describe('Random Util', () => {
    describe('getRandomInteger', () => {
        beforeEach(() => {
            jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        });

        afterEach(() => {
            jest.spyOn(global.Math, 'random').mockRestore();
        });

        it('should return one of all the integers in the range', () => {
            const minValue = 5;
            const maxValue = 5;
            const expectedNumber = 5;
            expect(getRandomInteger(minValue, maxValue)).toBe(expectedNumber);
        });

        it('should return random integer if range is valid', () => {
            const minValue = 0;
            const maxValue = 75;
            const expectedNumber = 37;
            expect(getRandomInteger(minValue, maxValue)).toBe(expectedNumber);
        });
    });
});
