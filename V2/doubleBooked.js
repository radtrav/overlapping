const isSameEvent = (a, b) => a.start === b.start && a.end == b.end && a.title === b.title;

const isOverlappingUnordered = (a, b) => (a.start < b.end) && (b.start < a.end) && !isSameEvent(a, b);

const createConflictName = (a, b) => a.title < b.title ? `${a.title}-${b.title}` : `${b.title}-${a.title}`

// this implementation does not sort first
// avoid duplicates by placing pairs in a Set and then spreading onto an Array
const doubleBooked = events => {
    const result = new Set();

    for (let i = 0; i < events.length; i++) {
        for (let j = 0; j < events.length; j++) {
            if (isOverlappingUnordered(events[i], events[j])) {
                result.add(createConflictName(events[i], events[j]));
            }
        }
    }

    return [...result];
};

module.exports = { doubleBooked, isSameEvent, isOverlappingUnordered, createConflictName };
