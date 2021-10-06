function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('RGB to HEX', () => {
    describe('Works with correct values', () => {
        it('converts white color correctly', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('converts lime color correctly', () => {
            expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        });
    });
    describe('Returns undefined with incorrect values', () => {
        it('returns undefined with incorrect red value', () => {
            expect(rgbToHexColor(256, 255, 255)).to.be.undefined;
        });
        it('returns undefined with incorrect green value', () => {
            expect(rgbToHexColor(255, 256, 255)).to.be.undefined;
        });
        it('returns undefined with incorrect blue value', () => {
            expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
        });
        it('returns undefined with wrong value type', () => {
            expect(rgbToHexColor('255', 255, 255)).to.be.undefined;
        });
        it('returns undefined with missing parameter', () => {
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });
    });
});