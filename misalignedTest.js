const { expect } = require('chai');
const { print_color_map } = require('./misaligned');

describe('print_color_map', () => {
    it('should generate 25 color pairs', () => {
        const result = print_color_map();
        expect(result.length).to.equal(25);
    });

    it('should have correct first entry', () => {
        const result = print_color_map();
        expect(result[0]).to.equal("1  | White     | Blue");
    });

    it('should have correct last entry', () => {
        const result = print_color_map();
        expect(result[24]).to.equal("25  | Violet    | Slate");
    });
});
