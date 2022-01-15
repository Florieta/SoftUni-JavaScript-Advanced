function sameNumbers(num)
{
    let numString =  String(num);
    let sumDigits = Number(numString[0]);
    let isSame = true;

    for (let i = 1; i < numString.length; i++) {
        sumDigits += Number(numString[i]);
        if (numString[i] !== numString[i-1]) {isSame = false;}
    }

    console.log(isSame);
    console.log(sumDigits);
}

sameNumbers(2222222);
sameNumbers(1234);