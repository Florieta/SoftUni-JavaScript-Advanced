function PressHouse() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;

        }
    }
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }

            if (!originalResearch.hasOwnProperty('title') || !originalResearch.hasOwnProperty('author')) {
                throw new Error('The original research should have author and title.');
            }
            super(title, content);
            this.comments = [];
            this.originalResearch = originalResearch;
        }
        addComment(comment) {
            this.comments.push(comment);
            return "The comment is added.";
        }
        toString() {
            let output = super.toString();
            output += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;

            if (this.comments.length > 0) {
                output += '\nComments:\n'
                output += this.comments.join('\n');
            }

            return output;
        }
    }
    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }
        addClient(clientName, orderDescription) {
            let hasClient = this.clients.find(client => client.name === clientName
                && client.description === orderDescription);

            if (hasClient) {
                throw new Error('This client has already ordered this review.');
            }

            this.clients.push({ name: clientName, description: orderDescription });
            return `${clientName} has ordered a review for ${orderDescription}`;
        }
        toString() {
            let output = super.toString() +'\n';
            output += `Book: ${this.book.name}`;
            if (this.clients.length > 0) {
                output += '\nOrders:\n';
                output += this.clients.map(client => `${client.name} - ${client.description}`).join('\n');
            }
 
            return output;
        }
    }
    return {Article, ShortReports, BookReview};
}