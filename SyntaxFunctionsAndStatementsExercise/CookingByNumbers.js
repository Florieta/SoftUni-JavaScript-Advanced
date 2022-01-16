function cookingByNumbers(start, op1, op2, op3, op4, op5) {
    let result = Number(start);
    let ops = [op1, op2, op3, op4, op5];

    for (let i = 0; i < 5; i++) {
        switch (ops[i]) {
            case "chop":
                result /= 2; break;
            case "dice":
                result = Math.sqrt(result); break;
            case "spice":
                result += 1; break;
            case "bake":
                result *= 3; break;
            case "fillet":
                result *= (1 - 0.20); break;
        }

        console.log(result)
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');