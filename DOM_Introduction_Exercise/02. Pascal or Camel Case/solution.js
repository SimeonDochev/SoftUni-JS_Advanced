function solve() {
    const allowedConventions = ['Camel Case', 'Pascal Case'];
    const input = document.getElementById('text').value;
    const convention = document.getElementById('naming-convention').value;
    const resultField = document.getElementById('result');
    
    if (!allowedConventions.includes(convention)) {
        resultField.textContent = 'Error!';
        return;
    }

    let result = input.toLowerCase().split(' ');
    if (convention == 'Pascal Case') {
        for (let i = 0; i < result.length; i++) {
            let current = result[i];
            result[i] = current[0].toUpperCase() + current.slice(1);
        }
    } else if (convention == 'Camel Case') {
        for (let i = 1; i < result.length; i++) {
            let current = result[i];
            result[i] = current[0].toUpperCase() + current.slice(1);
        }
    }
    resultField.textContent = `${result.join('')}`;
}