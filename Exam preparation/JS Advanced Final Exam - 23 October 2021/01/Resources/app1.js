window.addEventListener('load', solve);

function solve() {
    const genreField = document.getElementById("genre");
    const nameField = document.getElementById("name");
    const authorField = document.getElementById("author");
    const dateField = document.getElementById("date");

    const hitContainerField = document.getElementById("all-hits-container");
    let likesCounter = 0;

    const addButton = document.getElementById("add-btn");
    addButton.addEventListener("click", addSong);

    function addSong(e) {
        e.preventDefault();

        if (genreField.value != '' && nameField != '' && authorField != '' && dateField != ''){
            let divElement = document.createElement('div');
            let imgElement = document.createElement('img');
            let genreHeading = document.createElement('h2');
            let songHeading = document.createElement('h2');
            let authorHeading = document.createElement('h2');
            let dateHeading = document.createElement('h3');
            let saveBtn = document.createElement('button');
            let likeBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            divElement.className = 'hits-info';
            imgElement.setAttribute('src', './static/img/img.png');
            genreHeading.textContent = `Genre: ${genreField.value}`;
            songHeading.textContent = `Name: ${nameField.value}`;
            authorHeading.textContent = `Author: ${authorField.value}`;
            dateHeading.textContent = `Date: ${dateField.value}`;
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';

            divElement.appendChild(imgElement);
            divElement.appendChild(genreHeading);
            divElement.appendChild(songHeading);
            divElement.appendChild(authorHeading);
            divElement.appendChild(dateHeading);
            divElement.appendChild(saveBtn);
            divElement.appendChild(likeBtn);
            divElement.appendChild(deleteBtn);
            collectionDiv.appendChild(divElement);

            genreField.value = '';
            nameField = '';
            authorField = '';
            dateField = '';

            saveBtn.addEventListener('click', function(event){   // Save a song
                let savedCollectionDiv = document.querySelector('.saved-container');

                savedCollectionDiv.appendChild(event.target.parentNode);
                saveBtn.remove();
                likeBtn.remove();
            });

            likeBtn.addEventListener('click', function(event){
                let likesField = document.querySelector('.likes > p');

                likesCounter++;
                likeBtn.disabled = 'true';
                likesField.textContent = `Total Likes: ${likesCounter}`;
            });

            deleteBtn.addEventListener('click', function(event){  // Delete song
                event.target.parentNode.remove();
            });
        }
    }
}