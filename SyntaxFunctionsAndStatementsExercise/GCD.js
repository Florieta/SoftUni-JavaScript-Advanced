function gcd(x, y){
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    console.log((x))
}

gcd(15, 5);
gcd(2154, 458);
