const { isOverlapping } = require('./isOverlapping');
const { sortAscendingStart } = require('./sortAscendingStart');


const doubleBooked = _events => {
    if (!_events.length) {
        return [];
    }

    const result = [];
    const events = sortAscendingStart(_events);


    let a;
    let b;

    for (let i = 0; i < events.length; i++) {
        for (let j = i + 1; j < events.length; j++) {
            a = events[i];
            b = events[j];
            if (isOverlapping(a, b)) {
                result.push(`${a.title}-${b.title}`);
            }
        }
    }

    return result;

};

module.exports = { doubleBooked };