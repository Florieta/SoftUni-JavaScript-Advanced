function solve(numbers){
    numbers.sort((a, b) => a - b);
    const result = [];

    while (numbers.length > 0) {
        result.push(numbers.shift(), numbers.pop())
    }
    return result
}