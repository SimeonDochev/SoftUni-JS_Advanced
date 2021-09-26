function sumTable() {
    let sum = 0;
    const table = document.querySelectorAll('table tr');

    for (let i = 1; i < table.length; i++) {
        sum += Number(table[i].lastElementChild.textContent);
    }

    document.getElementById('sum').textContent = sum;
}
