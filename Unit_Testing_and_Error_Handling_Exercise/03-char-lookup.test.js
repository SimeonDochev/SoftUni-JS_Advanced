const { expect } = require('chai');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Char Lookup', () => {
    it('returns the char at the correct index', () => {
        expect(lookupChar('text', 0)).to.equal('t');
        expect(lookupChar('text', 2)).to.equal('x');
    });
    it('returns undefined when given wrong data type', () => {
        expect(lookupChar(5, 5)).to.be.undefined;
        expect(lookupChar('string', 'another string')).to.be.undefined;
        expect(lookupChar('text', '1')).to.be.undefined;
    });
    it('returns undefined when given floating point index', () => {
        expect(lookupChar('text', 1.1)).to.be.undefined;
    });
    it('returns "Incorrect index" when the index is invalid', () => {
        expect(lookupChar('text', -1)).to.equal('Incorrect index');
        expect(lookupChar('text', 4)).to.equal('Incorrect index');
    }); 
});