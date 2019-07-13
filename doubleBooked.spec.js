const { doubleBooked } = require('./doubleBooked');

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

})