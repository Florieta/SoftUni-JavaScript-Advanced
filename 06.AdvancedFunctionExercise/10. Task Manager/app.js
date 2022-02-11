function solve() {
    const buttonAdd = document.getElementById('add');
    buttonAdd.addEventListener('click', addTask);

    const sections = document.querySelectorAll('section');

    function addTask(e) {
        e.preventDefault();
        const task = document.getElementById('task');
        const description = document.getElementById('description');
        const date = document.getElementById('date');

        if (task.value !== '' && description.value !== '' && date.value !== '') {
            const article = document.createElement('article');
            article.innerHTML = `
                <h3>${task.value}</h3>
                <p>Description: ${description.value}</p>
                <p>Due Date: ${date.value}</p>
                <div class="flex">
                    <button class="green">Start</button>
                    <button class="red">Delete</button>
                </div>`;

            const [buttonStart, buttonDelete] = article.querySelectorAll('button');
            buttonStart.addEventListener('click', moveToNextSection);
            buttonDelete.addEventListener('click', deleteTask);

            sections[1].querySelectorAll('div')[1].appendChild(article);

            task.value = '';
            description.value = '';
            date.value = '';
        }
    }

    function moveToNextSection(e) {
        // const article = e.target.closest('article');
        const article = e.target.parentNode.parentNode;

        // const idx = [...sections].indexOf(article.closest('section')) + 1;
        const idx = [...sections].indexOf(article.parentNode.parentNode) + 1;
        sections[idx].querySelectorAll('div')[1].appendChild(article);

        if (idx === 2) {
            article.querySelector('div').innerHTML = `
                 <button class="red">Delete</button>
                 <button class="orange">Finish</button>`;

            const [buttonDelete, buttonFinish] = article.querySelectorAll('button');
            buttonDelete.addEventListener('click', deleteTask);
            buttonFinish.addEventListener('click', moveToNextSection);
        } else if (idx === 3) {
            article.querySelector('div').remove()
        }
    }

    function deleteTask(e) {
        // e.target.closest('article').remove()
        e.target.parentNode.parentNode.remove()
    }
}