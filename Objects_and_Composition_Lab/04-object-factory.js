function factory(library, orders) {
    let result = [];

    for (const order of orders) {
        newObj = Object.assign({}, order.template);
        for (const part of order.parts) {
            newObj[part] = library[part]
        }
        result.push(newObj);
    }
    return result;
}
