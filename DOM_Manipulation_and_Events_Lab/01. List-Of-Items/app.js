function addItem() {
    const list = document.getElementById('items');
    const text = document.getElementById('newItemText').value;

    const newItem = document.createElement('li');
    newItem.textContent = text;
    list.appendChild(newItem);
}