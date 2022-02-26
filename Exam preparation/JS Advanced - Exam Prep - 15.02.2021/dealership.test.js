const { expect, assert } = require('chai');
const dealership = require('./dealership');

describe('Testing the object "dealership"', () => {
 
    describe('Testing the method "newCarCost"', () => {
        it('Should return discounted price for an old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.be.equal(15000);
            expect(dealership.newCarCost('Audi TT 8J', 2000)).to.be.equal(-12000);
        });
 
        it('Should return the price without a discount', () => {
            expect(dealership.newCarCost('Mercedes', 30000)).to.be.equal(30000);
        });
 
        it('Should return second arg even if not a number', () => {
            expect(dealership.newCarCost('Mercedes', '')).to.be.equal('');
            expect(dealership.newCarCost('Mercedes', {})).to.be.eql({});
            expect(dealership.newCarCost('Mercedes', [])).to.be.eql([]);
            expect(dealership.newCarCost('Mercedes', null)).to.be.equal(null);
            expect(dealership.newCarCost('Mercedes', undefined)).to.be.equal(undefined);
        });
    });
 
    describe('Testing the method "carEquipment"', () => {
        it('Should return correct answer with valid inputs', () => {
            expect(dealership.carEquipment(['rims', 'seats', 'roof', 'doors', 'stereo'], [2, 3])).to.be.eql(['roof', 'doors']);
        });
 
        it('Should return correct answer with invalid first input', () => {
            expect(dealership.carEquipment([], [2, 3])).to.be.eql([undefined, undefined]);
        });
 
    });
 
    describe('Testing the method "euroCategory"', () => {
        it('Should make no discount for low category', () => {
            expect(dealership.euroCategory(2)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });
 
        it('Should make a discount for a high category', () => {
            expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});
