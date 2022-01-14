function aggregateElements(array) {
    let sumOfArray = 0;
    let sumOfArrayInv = 0;
    let concatArray = "";

    for (let i in array) {
        sumOfArray += array[i];
        sumOfArrayInv += 1 / array[i];
        concatArray += array[i];
    }

    console.log(sumOfArray);
    console.log(sumOfArrayInv);
    console.log(concatArray);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
