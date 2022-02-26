class ChristmasDinner{
    constructor(budget){
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
          }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let type = product[0];
        let price = Number(product[1]);
 
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product")
        }
 
        this.products.push(type);
        this.budget -= price;
 
        return `You have successfully bought ${type}!`
    }
 
    recipes(recipe) {
        let obj = recipe;
 
        if (obj.productsList.every(meal => this.products.includes(meal))) {
            this.dishes.push(obj)
              return `${obj.recipeName} has been successfully cooked!`;
        } else {
            throw new Error("We do not have this product")
        }
    }
 
    inviteGuests(name, dish) {
        let namesDishes = []
        let namesGuest = []
        for (let i = 0; i < this.dishes.length; i++) {
 
            namesDishes.push(Object.values(this.dishes[i])[0])
        }
 
        for (const key in this.guests) {
            namesGuest.push(key)
        }
 
        if (!namesDishes.includes(dish)) {
            throw new Error("We do not have this dish")
        }
 
        if (namesGuest.includes(name)) {
            throw new Error("This guest has already been invited")
        }
 
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }
 
    showAttendance() {
        let output = []
        let productsString;
        let string;
        for (let [name, dish] of Object.entries(this.guests)) {
            for (let i = 0; i < this.dishes.length; i++) {
                if (this.dishes[i].recipeName == dish) {
                    productsString = this.dishes[i].productsList.join(', ')
                }
            }
            string = `${name} will eat ${dish}, which consists of ` + productsString;
            output.push(string)
        }
        return output.join("\n")
    }
}