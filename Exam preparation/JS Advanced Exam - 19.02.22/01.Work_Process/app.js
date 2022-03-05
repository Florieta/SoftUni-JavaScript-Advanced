function solve() {
    let fnameField = document.getElementById('fname');
    let lnameField = document.getElementById('lname');
    let emailField = document.getElementById('email');
    let birthField = document.getElementById('birth');
    let positionField = document.getElementById('position');
    let salaryField = document.getElementById('salary');
    let buttonAdd = document.getElementById('add-worker');
    let table = document.getElementById('tbody');
    let spanBudget = document.getElementById('sum');

    buttonAdd.addEventListener('click', addPerson);

    function addPerson(e) {
        e.preventDefault();
       
        if (fnameField.value && lnameField.value && emailField.value
            && birthField.value && positionField.value && salaryField.value) {
            

            let trElement = createAnElement('tr', '', '', table);
            createAnElement('td', `${fnameField.value}`, '', trElement);
            createAnElement('td', `${lnameField.value}`, '', trElement);
            createAnElement('td', `${emailField.value}`, '', trElement);
            createAnElement('td', `${birthField.value}`, '', trElement);
            createAnElement('td', `${positionField.value}`, '', trElement);
            let salary = createAnElement('td', `${salaryField.value}`, '', trElement);
            let tdElement = createAnElement('td', '', '', trElement);
            let buttonFired = createAnElement('button', 'Fired', 'fired', tdElement);
            let buttonEdit = createAnElement('button', 'Edit', 'edit', tdElement);

            const price = Number(salary.textContent);
            spanBudget.textContent = (Number(spanBudget.textContent) + price).toFixed(2);

            fnameField.value = '';
            lnameField.value = '';
            emailField.value = '';
            birthField.value = '';
            positionField.value = '';
            salaryField.value = '';

            buttonFired.addEventListener('click', fired);
            buttonEdit.addEventListener('click', edits);

            function fired(e) {
                spanBudget.textContent = (Number(spanBudget.textContent) - Number(salary.textContent)).toFixed(2);
                e.target.parentElement.parentElement.remove();
            }

            function edits(e) {
                let target = e.target.parentElement.parentElement;
                let tdElements = Array.from(target.children);

                fnameField.value = tdElements[0].textContent;
                lnameField.value = tdElements[1].textContent;
                emailField.value = tdElements[2].textContent;
                birthField.value = tdElements[3].textContent;
                positionField.value = tdElements[4].textContent;
                salaryField.value = tdElements[5].textContent;

                spanBudget.textContent = (Number(spanBudget.textContent) - Number(salary.textContent)).toFixed(2);
                e.target.parentElement.parentElement.remove()


            }
        }
    }
    function createAnElement(type, content, attribute, appender) {
        const element = document.createElement(type);
        if (attribute) {
            element.setAttribute('class', attribute);
            element.textContent = content;
        } else if (content) {
            element.textContent = content;
        }
        if (appender) {
            appender.appendChild(element);
        }
        return element;
    }

}
solve()