window.addEventListener('load', solve);

function solve() {
    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');
    document.getElementById('add').addEventListener('click', onAdd);

    function onAdd(event) {
        event.preventDefault();
        const form = event.target.parentElement;

        const formData = new FormData(form);
        const model = formData.get('model');
        const year = Number(formData.get('year'));
        const description = document.getElementById('description').value;
        const price = Number(formData.get('price'));

        if (model != '' && year > 0 && description != '' && price > 0) {
            createRows(model, year, description, price);
            form.reset();
        }
    }

    function createRows(model, year, description, price) {
        const infoRow = document.createElement('tr');
        const hiddenRow = document.createElement('tr');
        infoRow.classList.add('info');
        hiddenRow.classList.add('hide');
        infoRow.innerHTML = `
<td>${model}</td>
<td>${price.toFixed(2)}</td>
<td>
<button class="moreBtn">More Info</button>
<button class="buyBtn">Buy it</button>
</td>
</tr>`
        hiddenRow.innerHTML = `
<td>Year: ${year}</td>
<td colspan="3">Description: ${description}</td>`

        infoRow.querySelector('.moreBtn').addEventListener('click', onToggle);
        infoRow.querySelector('.buyBtn').addEventListener('click', onBuy);

        furnitureList.appendChild(infoRow);
        furnitureList.appendChild(hiddenRow);

        function onToggle(event) {
            if (event.target.textContent == 'More Info') {
                hiddenRow.classList.remove('hide');
                event.target.textContent = 'Less Info';
            } else {
                hiddenRow.classList.add('hide');
                event.target.textContent = 'More Info';
            }
        }
        function onBuy(event) {
            const currentTotal = Number(totalPrice.textContent);
            totalPrice.textContent = (currentTotal + price).toFixed(2);
            event.target.parentElement.parentElement.remove();
        }
    }
}