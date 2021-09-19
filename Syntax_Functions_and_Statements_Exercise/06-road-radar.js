function roadRadar(speed, area) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let speedZone = 0;
    let difference = 0;
    let status = '';

    switch (area) {
        case 'motorway':
            speedZone = motorwayLimit;
            break;
        case 'interstate':
            speedZone = interstateLimit;
            break;
        case 'city':
            speedZone = cityLimit;
            break;
        case 'residential':
            speedZone = residentialLimit;
            break;
    }

    if (speed <= speedZone) {
        console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
        return
    } else {
        difference = speed - speedZone;
    }

    if (difference <= 20) {
        status = 'speeding'
    } else if (difference <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${status}`)
}

roadRadar(200, 'motorway')
