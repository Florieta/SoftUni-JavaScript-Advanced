function solve() {
    const buttonOnScreen = document.querySelector('#container button');
    buttonOnScreen.addEventListener('click', funcOnScreen);

    const buttonClear = document.querySelector('#archive button');
    buttonClear.addEventListener('click', funcClear);

    const ulMovies = document.querySelector('#movies ul');
    const ulArchive = document.querySelector('#archive ul');

    function funcOnScreen(e) {
        e.preventDefault();

        const [name, hall, ticketPrice] = document.querySelectorAll('#container input');

        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
            const movie = document.createElement('li');
            movie.innerHTML = `
                <span>${name.value}</span>
                <strong>Hall: ${hall.value}</strong>
                <div>
                    <strong>${Number(ticketPrice.value).toFixed(2)}</strong>
                    <input placeholder="Tickets Sold">
                    <button>Archive</button>
                </div>`;

            movie.querySelector('button').addEventListener('click', funcArchive);

            ulMovies.appendChild(movie);
            [name.value, hall.value, ticketPrice.value] = ['', '', '']
        }
    }

    function funcArchive(e) {
        const movieName = e.target.parentElement.parentElement.querySelector('span').textContent;
        const movieTicketPrice = Number(e.target.parentElement.querySelector('strong').textContent);
        const movieTicketNum = e.target.parentElement.querySelector('input').value;

        if (movieTicketNum !== '' && !isNaN(Number(movieTicketNum))) {
            const movie = document.createElement('li');

            movie.innerHTML = `
                <span>${movieName}</span>
                <strong>Total amount: ${(movieTicketPrice * Number(movieTicketNum)).toFixed(2)}</strong>
                <button>Delete</button>`;

            movie.querySelector('button').addEventListener('click', funcDelete);

            ulArchive.appendChild(movie);
            e.target.parentElement.parentElement.remove()
        }
    }

    function funcDelete(e) {
        e.target.parentElement.remove()
    }

    function funcClear(e) {
        e.target.parentElement.querySelector('ul').innerHTML = ''
    }
}