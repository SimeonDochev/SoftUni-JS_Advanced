function oddPositions(arr) {
    result = [];

    for(let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            result.push(arr[i] * 2);
        }
    }
    result.reverse();
    return result;
}

console.log(oddPositions([10, 15, 20, 25]))
console.log(oddPositions([3, 0, 10, 4, 7, 3]))
