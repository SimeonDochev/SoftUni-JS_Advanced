const { expect } = require('chai');

function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}


describe('Check for symmetry', () => {
    it('returns true when given symmtric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('returns false when given non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    });
    it('works with odd number of array elements', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('returns false when given wrong argument type', () => {
        expect(isSymmetric('A')).to.be.false;
    });
    it('returns false when given a symmetric string', () => {
        expect(isSymmetric('assa')).to.be.false;
    });
    it('returns false when given symmetric string with different data types', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });
});