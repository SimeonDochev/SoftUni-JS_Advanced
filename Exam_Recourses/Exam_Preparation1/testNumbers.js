const { expect } = require('chai');

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe('Test Numbers', function() {
    describe('sumNumber tests', function() {
        it('returns undefined when first parameter is not a number', function() {
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
        });
        it('returns undefined when second parameter is not a number', () => {
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
        });
        it('works with positive numbers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
        });
        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(-1, -2)).to.equal('-3.00');
        });
        it('works with a negative and a positive number', () => {
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
        });
    });
    describe('numberChecker tests', () => {
        it('returns the correct result with even number', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });
        it('returns the correct result with odd number', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
        it('works with a number passed as a string', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });
        it('throws an error with incorrect parameter', () => {
            expect(() => {testNumbers.numberChecker('asd')}).to.throw('The input is not a number!');
        });
    });
    describe('averageSumArray tests', () => {
        it('returns the correct result', () => {
            expect(testNumbers.averageSumArray([1, 1, 1])).to.equal(1);
        });
        it('starts from zero', () => {
            expect(testNumbers.averageSumArray([0])).to.equal(0);
        });
    })
});