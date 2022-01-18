function positiveNegative(arr){
    const result = [];

    for (let num of arr) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }

    console.log(result.join('\n'));
}

positiveNegative([7, -2, 8, 9]);
positiveNegative([3, -2, 0, -1]);