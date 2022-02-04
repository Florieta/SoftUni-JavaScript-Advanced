function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');

    let liItemElement = document.createElement('li');
    liItemElement.textContent = newItemTextElement.value;

    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';
    deleteButton.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    });
    liItemElement.appendChild(deleteButton);
    itemsElement.appendChild(liItemElement);

    newItemTextElement.value = '';
}