const { expect } = require('chai');
const { size } = require('../tshirts');

describe('size function', () => {
    it('should return S for sizes less than 38', () => {
        expect(size(37)).to.equal('S');
    });

    it('should return S for size 38 (edge case)', () => {
        expect(size(38)).to.equal('S');
    });

    it('should return M for sizes between 38 and 42', () => {
        expect(size(40)).to.equal('M');
    });

    it('should return L for sizes greater than or equal to 42', () => {
        expect(size(43)).to.equal('L');
    });
});
