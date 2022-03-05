class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let book = this.books.find(x => x.bookName == bookName);
        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        
        //this.books = this.books.filter(x => x.bookName != bookName);
        let index = this.books.indexOf(bookName);
        this.books.splice(index, 1);

        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (bookAuthor) {
            
            if (this.books.length == 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                this.books = this.books.filter(x => x.bookAuthor == bookAuthor);
                return this.books.map(x => `${x.bookName} == ${x.bookAuthor} - ${x.payed == true ? 'Has Paid' : 'Not Paid'}.`).join('\n');
            }
        } else {
            let output = `The book collection has ${this.capacity - Object.keys(this.books).length} empty spots left.\n`;
            let result = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            .map(x => `${x.bookName} == ${x.bookAuthor} - ${x.payed == true ? `Has Paid` : `Not Paid`}.`).join('\n');

            return output += result.trim();
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


