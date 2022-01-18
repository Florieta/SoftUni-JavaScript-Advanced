function lastFirst(arr){
    const firstNumber = Number(arr[0]);
    const lastNumber = Number(arr[arr.length - 1]);
    return firstNumber + lastNumber;
}

lastFirst(['20', '30', '40']);
lastFirst(['5', '10']);