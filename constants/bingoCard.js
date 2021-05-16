const cardColumns = {
    B: 'B',
    I: 'I',
    N: 'N',
    G: 'G',
    O: 'O'
};

const cardBounds = new Map([
    [cardColumns.B, { lowerBound: 1, upperBound: 15 }],
    [cardColumns.I, { lowerBound: 16, upperBound: 30 }],
    [cardColumns.N, { lowerBound: 31, upperBound: 45 }],
    [cardColumns.G, { lowerBound: 46, upperBound: 60 }],
    [cardColumns.O, { lowerBound: 61, upperBound: 75 }]
]);

const cardMaxNumber = 75;

exports.cardBounds = cardBounds;
exports.cardColumns = cardColumns;
exports.cardMaxNumber = cardMaxNumber;
