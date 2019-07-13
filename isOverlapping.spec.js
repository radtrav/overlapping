const { isOverlapping } = require('./isOverlapping');

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