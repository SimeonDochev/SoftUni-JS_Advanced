function deleteByEmail() {
    const input = document.getElementsByName('email')[0].value;
    const rows = document.querySelectorAll('tbody tr');
    let isFound = false;

    for (let row of rows) {
        if (row.textContent.includes(input) && input != '') {
            row.remove();
            isFound = true;
        }
    }

    const output = document.getElementById('result');
    if (isFound) {
        output.textContent = 'Deleted.'
    } else {
        output.textContent = 'Not found.'
    }
}