function getFibonator() {
    let firstTime = true;
    let secondLast = 0;
    let last = 1;
    return function () {
        if (firstTime) {
            firstTime = false;
            return 1;
        }
        let current = secondLast + last;
        secondLast = last;
        last = current;
        return current;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
