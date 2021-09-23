function townPopulation(data) {
    const towns = {};

    for (const town of data) {
        let tokens = town.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);
        if (towns[name]) {
            population += towns[name];
        }
        towns[name] = population;
    }
    for (const [town, population] of Object.entries(towns)) {
        console.log(`${town} : ${population}`)
    };
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
