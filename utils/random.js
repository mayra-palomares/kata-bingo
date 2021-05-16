const getRandomInteger = (minNum, maxNum) => {
    return Math.floor(Math.random() * (+maxNum - +minNum)) + +minNum;
};

exports.getRandomInteger = getRandomInteger;
