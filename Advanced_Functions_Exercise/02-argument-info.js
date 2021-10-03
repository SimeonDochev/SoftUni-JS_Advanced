function solution(...params) {
    const collection = {};

    for (let param of params) {
        const type = typeof param;
        if (!collection[type]) {
            collection[type] = 1;
        } else {
            collection[type] += 1;
        }
        console.log(`${type}: ${param}`)
    }
    for (const [key, value] of Object.entries(collection).sort((a, b) => b[1] - a[1])) {
        console.log(`${key} = ${value}`);
    }
}

solution('cat', 42, function () { console.log('Hello world!'); });
solution({ name: 'bob'}, 3.333, 9.999);
