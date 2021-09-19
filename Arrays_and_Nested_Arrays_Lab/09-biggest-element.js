function biggestElement(matrix) {
    biggestEl = -120102;

    for (let row of matrix) {
        for (let el of row) {
            if (el > biggestEl) {
                biggestEl = el;
            }
        }
    }

    return biggestEl;
}

console.log(biggestElement([[20, 50, 10],
                            [8, 33, 145]]
                                        ))
