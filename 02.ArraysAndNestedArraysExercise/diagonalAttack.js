function diagonalAttack(rawMatrix) {
    const size = rawMatrix.length;

    // parse matrix
    let matrix = [];

    rawMatrix.forEach(row => {
        matrix.push(row.split(' ').map(item => parseInt(item)))
    });

    // calculate main diagonals sum
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let leftIndex = 0;
    let rightIndex = size - 1;

    matrix.forEach(row => {
        leftDiagonal += row[leftIndex++];
        rightDiagonal += row[rightIndex--];
    });

    // transform matrix, if needed
    if (leftDiagonal === rightDiagonal) {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if ((i !== j) && (i + j !== size - 1)) {
                    matrix[i][j] = leftDiagonal
                }
            }
        }
    }

    // output
    matrix.forEach(row => {
        console.log(row.join(' '))
    })
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);