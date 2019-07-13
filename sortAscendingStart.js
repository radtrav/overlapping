const sortAscendingStart = events => {
    return events.sort((a, b) => {
        // sort start time ascending
        if (a.start > b.start) return 1;
        if (a.start < b.start) return -1;

        // sort end time acending 
        if (a.end > b.end) return 1;
        if (a.end < b.end) return -1;

        // sort title alphabetically
        return a.title > b.title;

    })
}

module.exports = { sortAscendingStart };