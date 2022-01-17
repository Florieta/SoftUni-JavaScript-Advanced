function biggerHalf(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const newArr = sorted.splice(Math.ceil((sorted.length - 1) / 2));
    return newArr;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
