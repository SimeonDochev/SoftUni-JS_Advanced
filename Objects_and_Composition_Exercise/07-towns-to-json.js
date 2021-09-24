function createJSONTable(table) {
    let result = [];

    for (let i = 1; i < table.length; i++) {
        let curRow = table[i].slice(1, table[i].length-1);
        let [town, lat, longitude] = curRow.split(' | ')
        town = town.trim();
        lat = Number(lat).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({'Town': town, 'Latitude': Number(lat), 'Longitude': Number(longitude)});
    }
    return JSON.stringify(result);
}

console.log(createJSONTable(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |',
'| Veliko Tarnovo | 39.222222 | 114.00000 |']
));
