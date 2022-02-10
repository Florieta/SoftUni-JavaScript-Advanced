function breakfastRobot() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const stock = {
        protein: 0,
        carbohydrate:0,
        fat: 0,
        flavour: 0
    };

    function control(string) {
        let [command, item, qty] = string.split(' ');

        switch (command) {
            case 'restock':
                return restock(item, qty);
            case 'prepare':
                return prepare(item, qty);
            case 'report':
                return report();
        }
    }

    function restock(microelement, qty) {
        stock[microelement] += Number(qty);
        return `Success`
    }

    function prepare(recipe, qty) {
        const stockRemaining = {};

        for (const microelement in recipes[recipe]) {
            const remaining = stock[microelement] - recipes[recipe][microelement] * Number(qty);
            if (remaining < 0) {
                return `Error: not enough ${microelement} in stock`
            } else {
                stockRemaining[microelement] = remaining
            }
        }

        Object.assign(stock, stockRemaining);
        return 'Success'
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }

    return control
}

let manager = breakfastRobot();
console.log (manager ('restock carbohydrate 10'));
console.log (manager ('restock flavour 10'));
console.log (manager ('prepare apple 1'));
console.log (manager ('restock fat 10'));
console.log (manager ('prepare burger 1'));
console.log (manager ('report'));

// protein=0 carbohydrate=4 fat=3 flavour=5:
// protein=0 carbohydrate=14 fat=10 flavour=10'