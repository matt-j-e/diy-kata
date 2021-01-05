const reachDestination = (distance, speed) => {
    const eta = Math.round(distance / speed * 2) / 2;
    const unit = eta === 1 ? 'hour' : 'hours';
    return `I should be there in ${eta} ${unit}.`;
};

module.exports = reachDestination;
