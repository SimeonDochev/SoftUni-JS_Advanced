function magicMatrix(matrix) {
    const size = matrix.length;
    let magicSum = 0;
    let isMagic = true;

    for (let i = 0; i < size; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < size; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }
        if (magicSum == 0) {
            magicSum = rowSum
        }
        if (rowSum != magicSum) {
            isMagic = false;
        }
    }
    return isMagic
}

console.log(magicMatrix([[4, 5, 6],
                         [6, 5, 4],
                         [5, 5, 5]]
));
