function lowestPrice(input) {
    let data = {};

    for (let info of input) {
        let [town, product, price] = info.split(' | ');
        price = Number(price);
        if (!data[product]) {
            data[product] = {}
        }
        data[product][town] = price;
    }
    for (const prod in data) {
        let sortedProduct = Object.entries(data[prod]).sort((a, b) => a[1] - b[1]);
        console.log(`${prod} -> ${sortedProduct[0][1]} (${sortedProduct[0][0]})`);
    }
}

lowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']
);
