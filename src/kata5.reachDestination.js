const reachDestination = (distance, speed) => {
    let eta = Math.round(distance / speed * 2) / 2;
    let unit = eta === 1 ? 'hour' : 'hours';
    if (eta === 0) {
        eta = 'a few';
        unit = 'minutes';
    }

    return `I should be there in ${eta} ${unit}.`;
};

module.exports = reachDestination;
