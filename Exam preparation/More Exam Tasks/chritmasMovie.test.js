const ChristmasMovies = require('./christmasMovie');
const expect = require('chai').expect;
 
describe('testing ChristmasMovies class functionality', ()=>{
    describe('instance of the class tests', ()=> {
        let christmas = null;
        beforeEach(() => {
            christmas = new ChristmasMovies();
        });
 
        it('should have property movieCollection which is an empty array', function () {
            expect(christmas).to.have.property('movieCollection').which.deep.equals([]);
        });
        it('should have property watched which is an empty watched', function () {
            expect(christmas).to.have.property('watched').which.deep.equals({});
        });
        it('should have property actors which is an empty array', function () {
            expect(christmas).to.have.property('actors').which.deep.equals([]);
        });
        it('is instance of the class christmas', function () {
            expect(christmas instanceof ChristmasMovies).to.be.true;
        });
        it('is an object', function () {
            expect(typeof christmas).to.equal('object');
        });
    })
    describe('testing the buyMovie method', () => {
        let christmas = null;
        beforeEach(() => {
            christmas = new ChristmasMovies();
        });
 
 
        it('should return a message if you successfully add buy a movie', function () {
            expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!')
        });
        it('should throw an error if you already have the movie in the movieCollection', function () {
            christmas.movieCollection.push({ name: 'Home Alone', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'] });
 
            expect(() => christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.throw('You already own Home Alone in your collection!');
        });
        it('should pass only unique actors', function () {
            christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic']);
            expect(christmas.movieCollection).to.deep.equal([{
                name: 'Last Christmas',
                actors: ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic']
            }]);
        });
        it('should add movie to movieCollection successfully', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
 
            expect(christmas.movieCollection).to.deep.equal([{
                name: 'Home Alone',
                actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']
            }])
        });
        it('should add multiple movies to movieCollection successfully', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
 
            expect(christmas.movieCollection).to.deep.equal([{
                name:'Home Alone',
                actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']
            },
            {
                name:'Home Alone 2',
                actors:['Macaulay Culkin']
            }])
        });
    })
    describe('testing watchMovie method', () =>{
        let christmas = null;
        beforeEach(() => {
            christmas = new ChristmasMovies();
        });
 
        it('Should add the movie into the watched object with key = name and value = 1', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            expect(christmas.watched).to.deep.equal({
                'Home Alone': 1
            })
        });
        it('should increase the value of the movie by 1', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            expect(christmas.watched).to.deep.equal({
                'Home Alone': 2
            })
        });
        it('should throw an error if there is no such movie', function () {
            expect(()=> christmas.watchMovie('Home Alone')).to.throw('No such movie in your collection!')
        });
    })
    describe('testing discardMovie method', () =>{
        let christmas = null;
        beforeEach(() => {
            christmas = new ChristmasMovies();
        });
 
        it('should throw an error if the movie is not in movieCollection', function () {
            expect(()=> christmas.discardMovie('Home')).to.throw('Home is not at your collection!')
        });
        it('should remove the movie from watched and movieCollection if it is watched and return a message', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.watchMovie('Home Alone');
            expect(christmas.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!')
            expect(christmas.watched.hasOwnProperty('Home Alone')).to.be.false;
            expect(christmas.movieCollection.some(x => x.name === 'Home Alone')).to.be.false;
        });
        it('should remove the movie movieCollection if it is not watched and throw an error', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(()=> christmas.discardMovie('Home Alone')).to.throw('Home Alone is not watched!')
            expect(christmas.movieCollection.some(x => x.name === 'Home Alone')).to.be.false;
 
        });
    })
    describe('testing favouriteMovie method', ()=>{
        let christmas = null;
        beforeEach(() => {
            christmas = new ChristmasMovies();
        });
 
        it('should return a message with the most watched movie', function () {
            christmas.buyMovie('Home Alone', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('Home Alone 2', ['Benedict Cumberbatch', 'Pharrell Williams']);
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
 
            expect(christmas.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 3 times!')
        });
        it('should throw an error if you haven\'t watched any movies', function () {
            christmas.buyMovie('Home Alone', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('Home Alone 2', ['Benedict Cumberbatch', 'Pharrell Williams']);
 
            expect(() => christmas.favouriteMovie()).to.throw('You have not watched a movie yet this year!')
        });
    })
    describe('testing mostStarredActor method', ()=>{
        let christmas = null;
        beforeEach(() => {
            christmas = new ChristmasMovies();
        });
 
        it('should return a message with the most starred actor', function () {
            christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
 
            expect(christmas.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 2 movies!')
        });
        it('should throw an error if no movies has been bought', function () {
            expect(()=> christmas.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });
    })
})