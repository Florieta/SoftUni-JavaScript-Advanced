const { expect, assert } = require('chai');
const createCalculator = require('./testNumbers');


describe('Test Numbers', () => {    
    describe('SumNumbers', () => {
        it('works with valid numbers', () => {
            expect(testNumbers.sumNumbers(1,2)).to.equal('3.00')
        })

        it('works with negative number', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00')
        })

        it('works with floating points', () => {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89')
        })

        it('returns undefined with string parameters', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined
        })

        it('returns undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined
        })
    })

    describe('NumberChecker', () => {
        it('works with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd')
        })
        it('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even')
        })
        it('works with odd value as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd')
        })
        it('works with even value as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even')
        })
        it('detects invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
            expect(() => testNumbers.numberChecker()).to.throw();
        })

    })

    describe('AverageSumArray', () => {
        it('works with integers', () => {
            expect(testNumbers.averageSumArray([1,2,3])).to.equal(2)
        })

        it('works with floats', () => {
            expect(testNumbers.averageSumArray([1.5,2.5,3.5])).to.equal(2.5)
        })
         
    })
})