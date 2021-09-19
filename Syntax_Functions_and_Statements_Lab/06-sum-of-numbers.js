function sumNums(n, m) {
    let start = Number(n);
    let end = Number(m);
    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
}
