const joinNames = namesObj => {
    let s = '';
    namesObj.map((obj, i) => {
        if(i === namesObj.length - 1) {
            s += obj.name;
        } else if(i === namesObj.length - 2) {
            s += obj.name + ' & ';
        } else {
            s += obj.name + ', ';
        }
    });
    return s;
};

module.exports = joinNames;
