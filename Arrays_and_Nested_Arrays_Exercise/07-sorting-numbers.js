function sortNumbers(arr) {
    const size = arr.length;
    arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            result.push(arr.shift());
        } else {
            result.push(arr.pop());
        }
    }
    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
