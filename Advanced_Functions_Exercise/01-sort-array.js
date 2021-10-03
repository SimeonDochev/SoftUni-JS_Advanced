function solution(numbers, cmd) {
    let result = numbers;
    if (cmd == 'asc') {
        result = numbers.sort((a, b) => a - b);
    } else {
        result = numbers.sort((a, b) => b - a);
    }
    return result;
}

console.log(solution([14, 7, 17, 6, 8], 'asc'));
console.log(solution([14, 7, 17, 6, 8], 'desc'));
