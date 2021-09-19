function fruits(type, weight, price) {//weigth in grams!
    let weightKg =  weight / 1000;
    let moneyNeeded = price * weightKg;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${type}.`);
}

fruits('orange', 2500, 1.80);
