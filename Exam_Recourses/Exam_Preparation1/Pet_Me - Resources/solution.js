function solve() {
    const addBtn = document.querySelector('#container button');
    const [petName, petAge, petKind, currentOwner] = document.querySelectorAll('#container input');
    const adoptionField = document.querySelector('#adoption ul');
    const adoptedField = document.querySelector('#adopted ul');
    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();
        const name = petName.value;
        const age = Number(petAge.value);
        const kind = petKind.value;
        const owner = currentOwner.value;

        if (name && age && !isNaN(age) && kind && owner) {
            const newLi = document.createElement('li');
            const newP = document.createElement('p');
            newP.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
            const newSpan = document.createElement('span');
            newSpan.textContent = `Owner: ${owner}`;
            const newBtn = document.createElement('button');
            newBtn.textContent = 'Contact with owner';
            newBtn.addEventListener('click', contactOwner);
            newLi.appendChild(newP);
            newLi.appendChild(newSpan);
            newLi.appendChild(newBtn);
            adoptionField.appendChild(newLi);
            petName.value = '';
            petAge.value = '';
            petKind.value = '';
            currentOwner.value = '';

            function contactOwner(e) {
                e.target.remove();
                const newDiv = document.createElement('div');
                newDiv.innerHTML = `<input placeholder="Enter your names"><button>Yes! I take it!</button>`
                newLi.appendChild(newDiv);
                const inputField = newDiv.getElementsByTagName('input')[0];
                const takeItBtn = newDiv.getElementsByTagName('button')[0];
                takeItBtn.addEventListener('click', takeIt);

                function takeIt(e) {
                    if (inputField.value) {
                        const newOwner = inputField.value;
                        newLi.remove();
                        adoptedField.appendChild(newLi);
                        newDiv.remove();
                        newSpan.textContent = `New Owner: ${newOwner}`;
                        const checkedBtn = document.createElement('button');
                        checkedBtn.textContent = 'Checked';
                        checkedBtn.addEventListener('click', checked);
                        newLi.appendChild(checkedBtn);
                    }
                    function checked(e) {
                        e.target.parentElement.remove();
                    }
                }
            }   
        }
    }
}