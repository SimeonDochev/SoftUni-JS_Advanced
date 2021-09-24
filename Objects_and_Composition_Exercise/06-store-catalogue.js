function storeCatalogue(products) {
    let catalogue = {};

    for (let data of products) {
        let [name, price] = data.split(' : ');
        catalogue[name] = price;
    }
    let sortedProducts = Object.entries(catalogue).sort();
    
    let currentLetter = null;
    for (const prod in sortedProducts) {
        const firstLetter = sortedProducts[prod][0][0]
        if ( firstLetter != currentLetter) {
            console.log(firstLetter);
            currentLetter = firstLetter;
        }
        console.log(sortedProducts[prod].join(': '));
    }
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
