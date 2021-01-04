const numberToReversedDigits = number => {
    if(!Number.isInteger(number)) return "Error. Needs to be a number";
    
    return number
        .toString()
        .split('')
        .reverse()
        .map(n => parseInt(n));
};

module.exports = numberToReversedDigits;
