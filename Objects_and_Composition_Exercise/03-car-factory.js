function createCar(order) {
    const engines = {
        'small': {'power': 90, 'volume': 1800},
        'normal': {'power': 120, 'volume': 2400},
        'monster': {'power': 200, 'volume': 3500}
    }      
    const carriages = {
        'hatchback': {'type': 'hatchback', 'color': null},
        'coupe': {'type': 'coupe', 'color': null}
    }

    let result = {};

    //Set the model as required.
    result['model'] = order.model;

    //Choose the right engine for the order.
    if (order.power < 106) {
        result['engine'] = engines['small'];
    } else if (order.power < 161) {
        result['engine'] = engines['normal'];
    } else {
        result['engine'] = engines['monster'];
    }

    //Set the carriage type and color.
    result['carriage'] = carriages[order.carriage];
    result['carriage']['color'] = order.color;
    
    //Set the wheels.
    if (order.wheelsize % 2 == 0) {
        order.wheelsize --;
    }
    wheel = order.wheelsize;
    result['wheels'] = [wheel, wheel, wheel, wheel];

    //Return the final car object.
    return result;
};

console.log(createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));
