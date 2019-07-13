// will recieve events in order of ascending start

const isOverlapping = (eventA, eventB) => eventB.start < eventA.end;

module.exports = { isOverlapping }