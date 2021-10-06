const { expect } = require('chai');

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('Math Enforcer', () => {
    describe('addFive', () => {
        it('returns undefined when given non-number arg', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
        it('returns the correct result when given a positive number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('returns the correct result when given a negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('returns the correct result when given a floating point number', () => {
            expect(mathEnforcer.addFive(5.5)).to.closeTo(10.5, 0.01);
        });
    });
    describe('subtractTen', () => {
        it('returns undefined when given non-number arg', () => {
            expect(mathEnforcer.subtractTen('string')).to.be.undefined;
        });
        it('returns the correct result when given a positive number', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('returns the correct result when given a negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('returns the correct result when given a floating point number', () => {
            expect(mathEnforcer.subtractTen(5.5)).to.closeTo(-4.5, 0.01);
        });
    });
    describe('sum', () => {
        it('returns undefined when given non-number arg', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
        });
        it('returns the correct result when given positive numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(10, 3)).to.equal(13);
        });
        it('returns the correct result when given negative numbers', () => {
            expect(mathEnforcer.sum(-5, -3)).to.equal(-8);
            expect(mathEnforcer.sum(5, -3)).to.equal(2);
        });
        it('returns the correct result when given a floating point number', () => {
            expect(mathEnforcer.sum(5.5, 5)).to.closeTo(10.5, 0.01);
            expect(mathEnforcer.sum(5.5, 5.5)).to.closeTo(11, 0.01);
        });
    });
});