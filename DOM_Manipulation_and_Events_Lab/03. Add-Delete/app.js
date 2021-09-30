function addItem() {
    const list = document.getElementById('items');
    const inputField = document.getElementById('newItemText');

    const newLi = document.createElement('li');
    newLi.textContent = inputField.value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeEl);

    newLi.appendChild(button);
    list.appendChild(newLi);

    function removeEl(ev) {
        const target = ev.target;
        target.parentNode.remove();
    }
    inputField.value = '';
}