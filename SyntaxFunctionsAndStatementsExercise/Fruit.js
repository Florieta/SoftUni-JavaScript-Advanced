function fruit(type, grams, pricePerKg){
let weight = grams / 1000;
let price = pricePerKg * weight;

console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);