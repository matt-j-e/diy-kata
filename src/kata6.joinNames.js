const joinNames = namesObj => {
    let outputString = '';
    namesObj.map((obj, i) => {
        if(i === namesObj.length - 1) {
            outputString += obj.name;
        } else if(i === namesObj.length - 2) {
            outputString += obj.name + ' & ';
        } else {
            outputString += obj.name + ', ';
        }
    });
    return outputString;
};

module.exports = joinNames;
