function solve (matrix){
    let sum1 = 0;
    let sum2 = 0;
    const last = matrix.length - 1;

for(i = 0; i< matrix.length; i++){
    sum1 += matrix[i][i];
    sum2 += matrix[i][last - i]
}

console.log(`${sum1} ${sum2}`);
}

solve([[20, 40],
    [10, 60]]);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);