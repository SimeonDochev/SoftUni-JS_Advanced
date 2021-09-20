function sortArray(arr) {
    let sortFunc = (a, b) => {
        if (a.length - b.length != 0) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }

    return (arr.sort(sortFunc)).join('\n');
}

console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
