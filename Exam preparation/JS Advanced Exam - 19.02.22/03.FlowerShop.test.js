const { expect, assert } = require('chai');

const flowerShop = require('./w3');

describe('testing Flower Shop functionality', ()=>{
    describe('calcPriceOfFlowers tests', ()=> {
        it('should throw an error if flower is not a string', function () {
            expect(() => flowerShop.calcPriceOfFlowers(2, 5, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers({}, 5, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 5, 2)).to.throw('Invalid input!');

        });
        it('should throw an error if price is not a number', function () {
            expect(() => flowerShop.calcPriceOfFlowers('rose', {}, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', [], 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 'a', 2)).to.throw('Invalid input!');

        });
        it('should throw an error if quantity is not a number', function () {
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, {})).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, [])).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 5, '2')).to.throw('Invalid input!');

        });
        it('should return the correct message if data is correct', function () {
            expect(flowerShop.calcPriceOfFlowers('rose', 5, 3)).to.equal(`You need $15.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 10, 5)).to.equal('You need $50.00 to buy rose!');
            
        });
    })
    describe('checkFlowersAvailable tests', ()=> {
        it('should throw an error if flower index is negative', function () {
            let check = flowerShop.checkFlowersAvailable('gerber', ['rose', 'lilia', 'tulip']);
            assert.equal(check, `The gerber are sold! You need to purchase more!`);
            //expect(() => flowerShop.checkFlowersAvailable('gerber', ['rose', 'lilia', 'tulip'])).to.throw(`The gerber are sold! You need to purchase more!`);
        });
        
        it('should return the correct message if flower is found', function () {
            expect(flowerShop.checkFlowersAvailable('rose', ['rose', 'lilia', 'tulip'])).to.equal(`The rose are available!`);
           
            
        });
    })
    describe('sellFlowers tests', ()=> {
        it('should throw an error if first parameter is not an array', function () {
            expect(() => flowerShop.sellFlowers({}, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('a', 2)).to.throw('Invalid input!');
        });
        it('should throw an error if second parameter is not a number, it is less than 0 or more than the length of arr', function () {
            expect(() => flowerShop.sellFlowers(['rose', 'tulip', 'lilia'], -2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose', 'tulip', 'lilia'], 'a')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose', 'tulip', 'lilia'], 10)).to.throw('Invalid input!');

        });
        it('should return the correct message if flower is found', function () {
            expect(flowerShop.sellFlowers( ['rose', 'lilia', 'tulip'], 1)).to.equal(`rose / tulip`);
           
            
        });
    })
})