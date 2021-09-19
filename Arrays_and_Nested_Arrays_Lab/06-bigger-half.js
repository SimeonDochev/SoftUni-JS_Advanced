function biggerHalf(arr) {
    arr.sort((a, b) => a - b);
    midpoint = arr.length / 2;

    return arr.slice(midpoint);
}

console.log(biggerHalf([4, 7, 2, 5]))
