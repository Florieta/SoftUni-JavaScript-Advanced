function smallestTwoNumbers(arrayNums) {
    arrayNums.sort((a, b)  => a - b);
    console.log(arrayNums.slice(0, 2).join(' '))
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);