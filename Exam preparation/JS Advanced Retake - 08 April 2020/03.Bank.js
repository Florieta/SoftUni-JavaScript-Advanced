class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
        this.transactions = [];
    }
    newCustomer(customer) {
        let firstName = customer[0];
        let lastName = customer[1];
        let personalId = Number(customer[2]);

        let cust = this.allCustomers.find(x => x.personalId === personalId);
        if (cust) {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        } else {
            this.allCustomers.push({
                firstName,
                lastName,
                personalId,
            });
        }
    }

    depositMoney(personalId, amount) {
        let cust = this.allCustomers.find(x => x.personalId === personalId);
        if (!cust) {
            throw new Error(`We have no customer with this ID!`);
        }

        if (isNaN(cust['totalMoney'])) {
            cust['totalMoney'] = amount;
        } else {
            cust['totalMoney'] += amount;
        }
        this.transactions.push(`${cust.firstName} ${cust.lastName} made deposit of ${amount}$!`);
        return `${cust['totalMoney']}$`;
    }
    withdrawMoney(personalId, amount) {
        let cust = this.allCustomers.find(x => x.personalId === personalId);
        if (!cust) {
            throw new Error(`We have no customer with this ID!`);
        }
        if (cust['totalMoney'] < amount) {
            throw new Error(`${firstName} ${lastName} does not have enough money to withdraw that amount!`);
        }

        cust['totalMoney'] -= amount;
        this.transactions.push(`${firstName} ${lastName} withdrew ${amount}$!`);
    }
    customerInfo(personalId) {
        let cust = this.allCustomers.find(x => x.personalId === personalId);
        if (!cust) {
            throw new Error(`We have no customer with this ID!`);
        }
        else {
            let transaction = this.transactions.filter((x) => { return x.includes(cust.firstName) });
            let reversed = transaction.reverse();

            let result = `Bank name: ${this._bankName}\nCustomer name: ${cust.firstName} ${cust.lastName}\nCustomer ID: ${cust.personalId}\nTotal Money: ${cust.totalMoney}$\nTransactions:`;
            let counter = reversed.length;

            reversed.forEach(x => result += '\n' + `${counter--}. ` + x);

            return result.trim();
        }
    }
}