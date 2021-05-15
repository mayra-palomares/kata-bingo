const initMap = maxNum => {
    const numbersMap = new Map();
    for (let i = 1; i <= maxNum; i++) {
        numbersMap.set(i, false);
    }
    return numbersMap;
};

const filterMap = (map, filterFn) => {
    return new Map([...map].filter(([key, value]) => filterFn(key, value)));
};

exports.initMap = initMap;
exports.filterMap = filterMap;
