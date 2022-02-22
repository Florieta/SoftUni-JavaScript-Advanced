function tickets(data, criterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let output = [];

    for (let item of data) {
        const [destination, price, status] = item.split('|');
        const ticket = new Ticket(destination, price, status);
        output.push(ticket)
    }

    switch (criterion) {
        case 'destination':
            return output.sort((a,b)=> a.destination.localeCompare(b.destination));
        case 'price':
            return output.sort((a,b)=> a.price - b.price);
        case 'status':
            return output.sort((a,b)=> a.status.localeCompare(b.status))
    }
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));