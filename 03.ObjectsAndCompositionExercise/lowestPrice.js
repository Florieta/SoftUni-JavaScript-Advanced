function solve(arr){
    let catalogue = {};
    arr.forEach((el) => {
        let[town, product, price] = el.split(' | ');
        price = Number(price);
        if (!catalogue[product]){
            catalogue[product] = {};
        }
        catalogue[product][town] = price;

    })

    for (const prod in catalogue) {
        const sorted = Object.entries(catalogue[prod]).sort((a,b) => a[1] - b[1]);

        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}