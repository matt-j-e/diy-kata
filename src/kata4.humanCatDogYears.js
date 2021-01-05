const humanCatDogYears = number => {
    if(!Number.isInteger(number) || number < 0) return "Error. Needs to be a non-negative integer";

    const catYears = calcAge(number, 'cat');
    const dogYears = calcAge(number, 'dog');
    return [number, catYears, dogYears];
};

function calcAge(humanAge, animal) {
    if(humanAge === 0) return 0;
    if(humanAge === 1) return 15;
    if(humanAge === 2) return 15 + 9;
    if(animal === 'cat') return 24 + ((humanAge - 2) * 4);
    if(animal === 'dog') return 24 + ((humanAge - 2) * 5);
}
    
module.exports = humanCatDogYears;
