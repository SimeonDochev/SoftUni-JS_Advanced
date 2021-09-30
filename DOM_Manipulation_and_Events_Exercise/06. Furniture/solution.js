function solve() {
  const table = document.querySelector('table tbody');
  const [inputField, outputField] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    const itemData = JSON.parse(inputField.value);

    for (let item of itemData) {
      const newRow = document.createElement('tr');

      const imageCell = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.img;
      imageCell.appendChild(img);

      const nameCell = document.createElement('td');
      const name = document.createElement('p');
      name.textContent = item.name;
      nameCell.appendChild(name);

      const priceCell = document.createElement('td');
      const price = document.createElement('p');
      price.textContent = item.price;
      priceCell.appendChild(price);

      const decorationCell = document.createElement('td');
      const decoration = document.createElement('p');
      decoration.textContent = item.decFactor;
      decorationCell.appendChild(decoration);

      const markCell = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'checkbox';
      markCell.appendChild(input);
      
      newRow.appendChild(imageCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(decorationCell);
      newRow.appendChild(markCell);

      table.appendChild(newRow);
    }
  }

  function buy() {
    const rows = table.children;
    const names = [];
    let total = 0;
    let decoration = 0;

    for (let row of rows) {
      const checkbox = row.lastElementChild.firstElementChild;
      if (checkbox.checked) {
        names.push(row.children[1].textContent);
        total += Number(row.children[2].textContent)
        decoration += Number(row.children[3].textContent);
      }
    }
    if (names.length > 0) {
      let result = 'Bought furniture: ';
      result += names.join(', ') + '\n';
      result += `Total price: ${total.toFixed(2)}\n`;
      result += `Average decoration factor: ${decoration / names.length}`;
      outputField.value = result;
    }
  }
}