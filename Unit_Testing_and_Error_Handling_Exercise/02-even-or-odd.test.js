const { expect } = require('chai');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Even or Odd', () => {
    it('returns undefined if arg is not string', () => {
        expect(isOddOrEven(0)).to.be.undefined;
    });
    it('returns "even" when given string with even length', () => {
        expect(isOddOrEven('abba')).to.equal('even');
    });
    it('returns "odd" when given string with odd length', () => {
        expect(isOddOrEven('aba')).to.equal('odd');
    });
});