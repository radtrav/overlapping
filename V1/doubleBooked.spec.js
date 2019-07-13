const { doubleBooked } = require('./doubleBooked');
const { isOverlapping } = require('./doubleBooked');
const { sortAscendingStart } = require('./doubleBooked');

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

describe('isOverlapping', () => {
    it('should be a function', () => {
        expect(typeof isOverlapping).toEqual('function');
    })

    it('returns true if eventB starts before eventA ends', () => {
        const a = { title: 'a', start: new Date('2010-08-17 12:00:00'), end: new Date('2010-08-17 14:00:00') };
        const b = { title: 'a', start: new Date('2010-08-17 13:00:00'), end: new Date('2010-08-17 15:00:00') };

        const expected = true;
        const actual = isOverlapping(a, b);
        expect(actual).toEqual(expected);
    })

    it('returns false if eventB starts when eventA ends', () => {
        const a = { title: 'a', start: new Date('2010-08-17 12:00:00'), end: new Date('2010-08-17 14:00:00') };
        const b = { title: 'a', start: new Date('2010-08-17 14:00:00'), end: new Date('2010-08-17 15:00:00') };

        const expected = false;
        const actual = isOverlapping(a, b);
        expect(actual).toEqual(expected);
    })
})

describe('doubleBooked', () => {
    it('should return an empty array if are no events', () => {
        const events = [];
        const expected = [];
        const actual = doubleBooked(events);
        expect(actual).toEqual(expected);
    });


    it('no overlap', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 10, end: 11 };

        const expected = [];

        expect(doubleBooked([a, b])).toEqual(expected);
        expect(doubleBooked([b, a])).toEqual(expected);
    });

    it('no overlap', () => {
        const a = { title: 'a', start: 1, end: 2 };
        const d = { title: 'd', start: 3, end: 4 };
        const b = { title: 'b', start: 5, end: 6 };
        const c = { title: 'c', start: 7, end: 8 };
        const e = { title: 'e', start: 9, end: 10 };


        const expected = [];

        expect(doubleBooked([a, b, c, d, e])).toEqual(expected);
        expect(doubleBooked([d, b, a, c, e])).toEqual(expected);
        expect(doubleBooked([e, c, a, d, b])).toEqual(expected);
    })

    it('no overlap', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 11, end: 12 };

        const expected = [];

        expect(doubleBooked([a, b])).toEqual(expected);
        expect(doubleBooked([b, a])).toEqual(expected);
    });

    it('simple overlap situation with a single overlap', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 9, end: 11 };

        const expected = ['a-b'];

        expect(doubleBooked([a, b])).toEqual(expected);
        expect(doubleBooked([b, a])).toEqual(expected);
    });

    it('simple overlap situation with a single overlap', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 9, end: 11 };
        const c = { title: 'c', start: 12, end: 13 };

        const expected = ['a-b'];

        expect(doubleBooked([a, b, c])).toEqual(expected);
        expect(doubleBooked([b, a, c])).toEqual(expected);
        expect(doubleBooked([c, a, b])).toEqual(expected);
    });

    it('simple overlap situation with a single overlap', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 9, end: 11 };
        const c = { title: 'c', start: 11, end: 13 };

        const expected = ['a-b'];

        expect(doubleBooked([a, b, c])).toEqual(expected);
        expect(doubleBooked([b, a, c])).toEqual(expected);
        expect(doubleBooked([c, a, b])).toEqual(expected);
    })

    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 9, end: 12 };
        const c = { title: 'c', start: 11, end: 13 };

        const expected = ['a-b', 'b-c'];

        expect(doubleBooked([a, b, c])).toEqual(expected);
        expect(doubleBooked([b, a, c])).toEqual(expected);
        expect(doubleBooked([c, a, b])).toEqual(expected);
    })
    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 9, end: 12 };
        const c = { title: 'c', start: 9, end: 13 };

        const expected = ['a-b', 'a-c', 'b-c'];

        expect(doubleBooked([a, b, c])).toEqual(expected);
        expect(doubleBooked([b, a, c])).toEqual(expected);
        expect(doubleBooked([c, a, b])).toEqual(expected);
    })

    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const d = { title: 'd', start: 1, end: 11 };
        const b = { title: 'b', start: 9, end: 12 };
        const c = { title: 'c', start: 9, end: 13 };


        const expected = ['a-d', 'a-b', 'a-c', 'd-b', 'd-c', 'b-c'];

        expect(doubleBooked([a, b, c, d])).toEqual(expected);
        expect(doubleBooked([d, b, a, c])).toEqual(expected);
        expect(doubleBooked([c, a, d, b])).toEqual(expected);
    })

    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const d = { title: 'd', start: 1, end: 11 };
        const b = { title: 'b', start: 9, end: 12 };
        const c = { title: 'c', start: 9, end: 13 };
        const e = { title: 'e', start: 13, end: 14 };


        const expected = ['a-d', 'a-b', 'a-c', 'd-b', 'd-c', 'b-c'];

        expect(doubleBooked([a, b, c, d, e])).toEqual(expected);
        expect(doubleBooked([d, b, a, c, e])).toEqual(expected);
        expect(doubleBooked([e, c, a, d, b])).toEqual(expected);
    })

    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const d = { title: 'd', start: 1, end: 10 };
        const b = { title: 'b', start: 1, end: 12 };
        const c = { title: 'c', start: 13, end: 16 };
        const e = { title: 'e', start: 14, end: 17 };


        const expected = ['a-d', 'a-b', 'd-b', 'c-e'];

        expect(doubleBooked([a, b, c, d, e])).toEqual(expected);
        expect(doubleBooked([d, b, a, c, e])).toEqual(expected);
        expect(doubleBooked([e, c, a, d, b])).toEqual(expected);
    })

    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const d = { title: 'd', start: 1, end: 10 };
        const b = { title: 'b', start: 1, end: 12 };
        const c = { title: 'c', start: 13, end: 16 };
        const e = { title: 'e', start: 14, end: 17 };


        const expected = ['a-d', 'a-b', 'd-b', 'c-e'];

        expect(doubleBooked([a, b, c, d, e])).toEqual(expected);
        expect(doubleBooked([d, b, a, c, e])).toEqual(expected);
        expect(doubleBooked([e, c, a, d, b])).toEqual(expected);
    })

    it('multiple overlap situation', () => {
        const a = { title: 'a', start: 1, end: 10 };
        const b = { title: 'b', start: 1, end: 12 };
        const c = { title: 'c', start: 1, end: 16 };
        const e = { title: 'e', start: 3, end: 17 };
        const d = { title: 'd', start: 6, end: 18 };

        const expected = ['a-b', 'a-c', 'a-e', 'a-d', 'b-c', 'b-e', 'b-d', 'c-e', 'c-d', 'e-d'];

        expect(doubleBooked([a, b, c, d, e])).toEqual(expected);
        expect(doubleBooked([d, b, a, c, e])).toEqual(expected);
        expect(doubleBooked([e, c, a, d, b])).toEqual(expected);
    })

})