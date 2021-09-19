function diagonalSums(matrix) {
    const size = matrix.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < size; row++) {
        primaryDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][size - 1 - row];
    }

    console.log(primaryDiagonalSum, secondaryDiagonalSum);
}

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]
                        );
