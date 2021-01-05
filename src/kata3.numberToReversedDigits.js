const numberToReversedDigits = number => {
    if(!Number.isInteger(number)) return "Error. Needs to be an integer";

    return number
        .toString()
        .split('')
        .reverse()
        .map(n => parseInt(n));
};

module.exports = numberToReversedDigits;
