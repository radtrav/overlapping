const isOverlapping = (eventA, eventB) => eventB.start < eventA.end;

const sortAscendingStart = events => events.sort((a, b) => {
    // sort start time ascending
    if (a.start > b.start) return 1;
    if (a.start < b.start) return -1;

    // sort end time acending 
    if (a.end > b.end) return 1;
    if (a.end < b.end) return -1;

    // sort title alphabetically
    return a.title > b.title;
});

// sorts first to avoid duplicates when comparing overlap
const doubleBooked = _events => {
    const result = [];
    const events = sortAscendingStart(_events);

    for (let i = 0; i < events.length; i++) {
        for (let j = i + 1; j < events.length; j++) {
            if (isOverlapping(events[i], events[j])) {
                result.push(`${events[i].title}-${events[j].title}`);
            }
        }
    }

    return result;
};

module.exports = { doubleBooked, isOverlapping, sortAscendingStart };
