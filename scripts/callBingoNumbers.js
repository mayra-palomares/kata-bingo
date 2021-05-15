const { getRandomInteger } = require('../utils/random');
const { filterMap } = require('../utils/map');

/**
 * This function receives a numbers map where the key is the number(1-75)
 * and the value a boolean which is true when the number was called.
 * @param {*} numbers
 * @returns number
 */
const callNumber = (numbersMap) => {
    let number;
    const availableNumbersMap = filterMap(numbersMap, (key, value) => value === false);
    const maxNumber = availableNumbersMap.size;
    if (maxNumber > 0) {
        const randomNum = getRandomInteger(0, maxNumber);
        const [key] = [...availableNumbersMap][randomNum];
        number = key;
        numbersMap.set(number, true);
    }

    return number;
};

exports.callNumber = callNumber;
