function solve() {
    let taskField = document.getElementById('task');
    let descriptionField = document.getElementById('description');
    let dateField = document.getElementById('date');
    let addButton = document.getElementById('add');

    addButton.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        if (taskField.value == '' || descriptionField.value == '' || dateField.value == '') return;

        let article = document.createElement('article');
        let h3Element = document.createElement('h3');
        h3Element.textContent = taskField.value;
        article.appendChild(h3Element);

        let p1Element = document.createElement('p');
        p1Element.textContent = `Description: ${descriptionField.value}`
        article.appendChild(p1Element);

        let p2Element = document.createElement('p');
        p2Element.textContent = `Due Date: ${dateField.value}`
        article.appendChild(p2Element);

        let divEl = document.createElement('div');
        divEl.classList.add('flex');
        let buttonStart = document.createElement('button');
        let buttonDelete = document.createElement('button');
        buttonStart.classList.add('green');
        buttonDelete.classList.add('red');
        buttonStart.textContent = 'Start';
        buttonDelete.textContent = 'Delete';
        divEl.appendChild(buttonStart);
        divEl.appendChild(buttonDelete);
        article.appendChild(divEl);

        document.getElementsByClassName('orange')[0].parentNode.parentNode.children[1].appendChild(article)

        taskField.value = '';
        descriptionField.value = '';
        dateField.value = '';

        buttonStart.addEventListener('click', onStart);
        buttonDelete.addEventListener('click', onDelete);

        function onStart() {
            let divInProgress = document.getElementById('in-progress');
            divInProgress.appendChild(article);
            divEl.removeChild(buttonStart);
            let finishButton = document.createElement('button');
            finishButton.classList.add('orange');
            finishButton.textContent = 'Finish';
            divEl.appendChild(finishButton);

            finishButton.addEventListener('click', complete)
            function complete() {
                let divComplete = document.querySelector('h1.green').parentNode.parentNode.children[1];
                divComplete.appendChild(article);
                article.removeChild(divEl);
            }
        }

        function onDelete(e) {
            e.target.parentNode.parentNode.remove()
        }
    }



}