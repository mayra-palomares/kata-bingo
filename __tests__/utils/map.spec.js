const { initMap, filterMap } = require('./../../utils/map');

describe('Map Util', () => {
    describe('initMap', () => {
        it('should return map with size 5 when maxValue is 5', () => {
            const expectedMap = new Map([
                [1, false], [2, false], [3, false], [4, false], [5, false]
            ]);
            expect(initMap(5)).toEqual(expectedMap);
        });

        it('should return empty map when size is 0 or less', () => {
            const expectedMap = new Map();
            expect(initMap(0)).toEqual(expectedMap);
            expect(initMap(-1)).toEqual(expectedMap);
        });
    });

    describe('filterMap', () => {
        it('should return empty map if no matches', () => {
            const mockCallback = jest.fn((key, value) => value === false);
            const numbersMap = new Map([
                [1, true], [2, true], [3, true], [4, true], [5, true]
            ]);
            const expectedMap = new Map();
            const expectedMockCalls = 5;
            expect(filterMap(numbersMap, mockCallback)).toEqual(expectedMap);
            expect(mockCallback.mock.calls.length).toBe(expectedMockCalls);
        });

        it('should return  map if it found matches', () => {
            const mockCallback = jest.fn((key, value) => value === false);
            const numbersMap = new Map([
                [1, true], [2, false], [3, true], [4, false], [5, true]
            ]);
            const expectedMap = new Map([
                [2, false], [4, false]
            ]);
            const expectedMockCalls = 5;
            expect(filterMap(numbersMap, mockCallback)).toEqual(expectedMap);
            expect(mockCallback.mock.calls.length).toBe(expectedMockCalls);
        });
    });
});
