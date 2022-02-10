function argumentInfo(...args) {
    const types = {};

    for (let a of args) {
        const type = typeof(a);
        const value = String(a);
        console.log(`${type}: ${value}`);

        if (types[type] === undefined) {
            types[type] = 1
        } else {
            types[type] += 1
        }
    }

    const typesSorted = Object.fromEntries(
        Object.entries(types).sort(([,a],[,b]) => b-a));
    for (const type in typesSorted) {
        console.log(`${type} = ${typesSorted[type]}`)
    }
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999)