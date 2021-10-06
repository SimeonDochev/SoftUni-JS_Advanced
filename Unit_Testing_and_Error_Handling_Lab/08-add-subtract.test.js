const { expect } = require('chai');

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

describe('Calculator', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = createCalculator();
    })

    it('has all methods', () => {
        expect(calculator).to.has.ownProperty('add');
        expect(calculator).to.has.ownProperty('subtract');
        expect(calculator).to.has.ownProperty('get');
    });
    it('starts from 0', () => {
        expect(calculator.get()).to.equal(0);
    });
    it('works with string that can be parsed as number', () => {
        calculator.add('1');
        expect(calculator.get()).to.equal(1);
    });
    describe('Calculator methods', () => {
        it('adds number', () => {
            calculator.add(1);
            expect(calculator.get()).to.equal(1);
        });
        it('subtracts number', () => {
            calculator.subtract(1);
            expect(calculator.get()).to.equal(-1);
        });
        it('keeps internal sum', () => {
            calculator.add(5);
            calculator.subtract(3);
            expect(calculator.get()).to.equal(2);
        });
    });
});