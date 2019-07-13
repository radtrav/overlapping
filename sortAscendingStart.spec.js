const { sortAscendingStart } = require('./sortAscendingStart');

describe('sortAscendingStart', () => {
    it('should be a function', () => {
        expect(typeof sortAscendingStart).toEqual('function');
    })

    it('it sort in an ascending with dates', () => {
        const eventA = { title: 'a', start: new Date('2010-08-17 12:00:00'), end: new Date('2010-08-17 13:00:00') }
        const eventB = { title: 'b', start: new Date('2010-08-17 13:00:00'), end: new Date('2010-08-17 14:00:00') }
        const eventC = { title: 'c', start: new Date('2010-08-17 16:00:00'), end: new Date('2010-08-17 18:00:00') }

        const expected = [eventA, eventB, eventC];
        const actual = sortAscendingStart([eventB, eventC, eventA]);

        expect(actual).toEqual(expected);
    })

    it('it sort in an ascending with numbers', () => {
        const eventA = { title: 'a', start: 12, end: 13 }
        const eventB = { title: 'b', start: 13, end: 14 }
        const eventC = { title: 'c', start: 16, end: 18 }

        const expected = [eventA, eventB, eventC];
        const actual = sortAscendingStart([eventB, eventC, eventA]);

        expect(actual).toEqual(expected);
    })


    it('it sorts in an ascending by start and by end', () => {
        const eventA = { title: 'a', start: 12, end: 13 }
        const eventB = { title: 'b', start: 12, end: 14 }
        const eventC = { title: 'c', start: 16, end: 18 }

        const expected = [eventA, eventB, eventC];
        const actual = sortAscendingStart([eventB, eventC, eventA]);

        expect(actual).toEqual(expected);
    })

    it('it sorts in an ascending by start and by end', () => {
        const eventA = { title: 'a', start: 1, end: 13 }
        const eventB = { title: 'b', start: 2, end: 4 }
        const eventC = { title: 'c', start: 5, end: 14 }
        const eventD = { title: 'd', start: 5, end: 18 }

        const expected = [eventA, eventB, eventC, eventD];
        const actual = sortAscendingStart([eventB, eventC, eventA, eventD]);

        expect(actual).toEqual(expected);
    })

    it('it sorts in an ascending by title if start and end are the same', () => {
        const eventA = { title: 'a', start: 1, end: 13 }
        const eventB = { title: 'b', start: 1, end: 13 }
        const eventC = { title: 'c', start: 1, end: 13 }
        const eventD = { title: 'd', start: 1, end: 13 }

        const expected = [eventA, eventB, eventC, eventD];
        const actual = sortAscendingStart([eventB, eventC, eventA, eventD]);

        expect(actual).toEqual(expected);
    })
})

