function solve(list) {
    let sumResult = 0;
    let inverseSum = 0;

    for (let num of list) {
        sumResult += num;
        inverseSum += 1 / num;
    }
    console.log(sumResult);
    console.log(inverseSum);
    console.log(list.join(''));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
