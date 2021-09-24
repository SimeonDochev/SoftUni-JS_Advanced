function heroInformation(input) {
    let result = [];
    for (const data of input) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        result.push({
            name,
            level,
            items
        });
    };
    return JSON.stringify(result);
};

console.log(heroInformation(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));
