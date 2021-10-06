function solve() {
    const onScreenBtn = document.querySelector('#container button');
    const [nameInput, hallInput, priceInput] = Array.from(document.querySelectorAll('#container input'));
    const moviesOnScreen = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', () => archiveSection.innerHTML = '');

    onScreenBtn.addEventListener('click', onScreen);
    const movies = {};

    function onScreen(e) {
        e.preventDefault();
        if (nameInput.value != '' && hallInput.value != '' && !isNaN(Number(priceInput.value))) {
            const newMovie = document.createElement('li');
            newMovie.innerHTML = 
                            `<span>${nameInput.value}</span>
                            <strong>Hall: ${hallInput.value}</strong>
                            <div>
                                <strong>${Number(priceInput.value).toFixed(2)}</strong>
                                <input placeholder="Tickets Sold">
                                <button>Archive</button>
                            </div>`;
            moviesOnScreen.appendChild(newMovie);
            movies[nameInput.value] = Number(priceInput.value);
            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
            newMovie.querySelector('button').addEventListener('click', archive);
        }
    }

    function archive(e) {
        const movie = e.target.parentElement.parentElement;
        const ticketsSold = Number(movie.querySelector('#movies div input').value);
        if (!isNaN(ticketsSold) && ticketsSold != '') {
            console.log(movie);
            const movieName = movie.children[0].textContent;
            console.log(movieName);
            const totalAmount = movies[movieName] * ticketsSold;
            moviesOnScreen.removeChild(movie);
            delete movies[movieName];
            movie.innerHTML = `<span>${movieName}</span>
                               <strong>Total amount: ${totalAmount.toFixed(2)}</strong>
                               <button>Delete</button>`;
            archiveSection.appendChild(movie);
            movie.querySelector('button').addEventListener('click', () => movie.remove());
        }
    }
}