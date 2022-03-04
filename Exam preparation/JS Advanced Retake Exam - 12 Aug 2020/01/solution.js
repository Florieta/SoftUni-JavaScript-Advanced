function solve() {
    const onScreenBtn = document.querySelector('#container > button');
    const archiveSectionUl = document.querySelector("#archive > ul");
    archiveSectionUl.innerHTML = '';

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.querySelector("#container > input[type=text]:nth-child(1)");
        const hall = document.querySelector("#container > input[type=text]:nth-child(2)");
        const price = document.querySelector("#container > input[type=text]:nth-child(3)");

        if (name.value != '' && hall.value != '' && price.value != '') {
            let priceParsedToNumber = Number(price.value);

            if (isNaN(priceParsedToNumber)) {
                return;
            }

            const moviesOnScreenUlSection = document.querySelector("#movies > ul");

            const liElement = document.createElement('li');
            liElement.innerHTML = `<span>${name.value}</span>
            <strong>Hall: ${hall.value}</strong>`;

            const divElement = document.createElement('div');
            const strongEl = document.createElement('strong');
            strongEl.textContent = priceParsedToNumber.toFixed(2);
            divElement.appendChild(strongEl);
            const inputEl = document.createElement('input');
            inputEl.setAttribute('placeholder', 'Tickets Sold');
            divElement.appendChild(inputEl);
            const archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', (e) => {
                let div = e.target.parentNode;
                let parent = div.parentNode;

                let inputTicketsSold = Number(div.querySelector("input").value);
                let ticketPrice = Number(div.querySelector("strong").textContent);
                let movieName = parent.querySelector("span").textContent;

                if (!isNaN(inputTicketsSold)) {
                    let profit = inputTicketsSold * ticketPrice;
                    const archiveSectionUl = document.querySelector("#archive > ul");
                    const liElement = document.createElement('li');

                    const spanElement = document.createElement('span');
                    const strongElement = document.createElement('strong');
                    const deleteBtn = document.createElement('button');

                    spanElement.textContent = movieName;
                    strongElement.textContent = `Total amount: ${profit.toFixed(2)}`;
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', e => {
                        e.target.parentNode.remove();
                    });

                    liElement.appendChild(spanElement);
                    liElement.appendChild(strongElement);
                    liElement.appendChild(deleteBtn);
                    archiveSectionUl.appendChild(liElement);
                } else {
                    return;
                }

                parent.remove();
            });
            divElement.appendChild(archiveBtn);

            name.value = '';
            hall.value = '';
            price.value = '';

            liElement.appendChild(divElement);
            moviesOnScreenUlSection.appendChild(liElement);
        }
    })

    const clearBtn = document.querySelector("#archive > button");
    clearBtn.addEventListener('click', () => {
        archiveSectionUl.innerHTML = '';
    })
}