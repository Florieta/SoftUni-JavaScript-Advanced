const { expect, assert } = require('chai');
const numberOperations = require('./numberOperations');

describe("NumberOperation", function() {
    describe("PowNumber", function() {
        it("Should return the right result when a valid number is passed", function() {
            expect(numberOperations.powNumber(2)).to.equal(4)
        });
        it('Should return the power of the negative number', () => {
            expect(numberOperations.powNumber(-2)).to.be.equal(4);
        });
 
        it('Should return zero with zero input', () => {
            expect(numberOperations.powNumber(0)).to.be.equal(0);
        });
     });
     describe("NumberChecker", function() {
        it("returns the right result when a the number is less than 100", function() {
            expect(numberOperations.numberChecker(80)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(-99)).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('9')).to.equal('The number is lower than 100!');

        });

        it("returns the right result when a the number is more than 100", function() {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(120)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('109')).to.equal('The number is greater or equal to 100!');
            
        });


        it("throws an error when the input is not a number", function() {
            expect(() => numberOperations.numberChecker('a')).to.throw();
            expect(() => numberOperations.numberChecker()).to.throw();
            expect(() => numberOperations.numberChecker({})).to.throw();

        });

     });

     describe("Testing the sumArrays method", function() {
        it('Should return correct array', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [4, 5, 6])).to.be.eql([5, 7, 9]);
        });
 
        it('Should return correct array', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [4, 5, 6])).to.be.eql([5, 7, 9, 4]);
        });
 
        it('Should return correct array', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [])).to.be.eql([1, 2, 3]);
        });
 
        it('Should return correct array', () => {
            expect(numberOperations.sumArrays([1], [])).to.be.eql([1]);
        });
     });
});

