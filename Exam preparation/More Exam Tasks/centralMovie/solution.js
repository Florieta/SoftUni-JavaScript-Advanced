function solve() {
    let [name, hall, ticketPrice] = document.querySelectorAll('input[type=text');
    let buttonOnScreen = document.querySelector('div button');
    let buttonClear = document.querySelector('section button');
    let [movies, archiveSec] = document.querySelectorAll('ul');
    buttonOnScreen.addEventListener('click', onScreen);

    function onScreen(e) {
        e.preventDefault();


        if (name.value && hall.value && ticketPrice.value) {
            ticketPrice = ticketPrice.value;
            if (isNaN(ticketPrice)) {
                return;
            }

            let li = createAnElement('li', '', '', movies);
            createAnElement('span', `${name.value}`, '', li);
            let strong = createAnElement('strong', `Hall: ${hall.value}`, '', li);
            let div = createAnElement('div', '', '', li);
            let strong2 = createAnElement('strong', `${(ticketPrice).toFixed(2)}`, '', div);
            let input = createAnElement('input', 'name.value', '', div);
            input.setAttribute('placeholder', 'Tickets Sold');
            let archiveButton = createAnElement('button', 'Archive', '', div);

            archiveButton.addEventListener('click', archive);
            function archive() {
                if (Number.isInteger(input.value)) {

                    archiveSec.appendChild(li);
                    li.removeChild(div);
                    strong.textContent = `Total amount: ${(ticketPrice * input.value).toFixed(2)}`;
                    let deleteButton = document.createElement('button');
                    li.appendChild(deleteButton);

                    deleteButton.addEventListener('click', deletes);

                    function deletes() {
                        archiveSectionUl.innerHTML = '';
                    }


                }
            }

            buttonClear.addEventListener('click', clears);
            function clears() {
                archiveSec.removeChildren();
            }
        }
    }
    function createAnElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }
}