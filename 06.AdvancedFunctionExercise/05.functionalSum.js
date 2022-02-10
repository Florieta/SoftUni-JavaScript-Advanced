function functionalSum(n) {
    let sum = n;

    function add(m) {
        sum += m;
        return add
    }

    add.toString = () => {
        return sum
    };

    return add
}

console.log(functionalSum(1).toString());
console.log(functionalSum(1)(6)(-3).toString());