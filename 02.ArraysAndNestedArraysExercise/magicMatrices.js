function magicMatrices(matrix) {
    const size = matrix.length;
    let isMagic = true;
    let magicSum, columnSum, rowSum;

    for (let i = 0; i < size; i++) {
        if (i === 0) {
            magicSum = matrix[i].reduce((sum, item) => sum + item);
            for (let j = 0; j < size; j++) {
                columnSum = 0;
                for (let k = 0; k < size; k++) {
                    columnSum += matrix[k][j]
                }
                if (columnSum !== magicSum) {isMagic = false}
            }
        } else {
            rowSum = matrix[i].reduce((sum, item) => sum + item);
            if (rowSum !== magicSum) {isMagic = false}
        }
    }
    console.log(isMagic)
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);