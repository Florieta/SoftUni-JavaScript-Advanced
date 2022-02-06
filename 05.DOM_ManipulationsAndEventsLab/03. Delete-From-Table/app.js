function deleteByEmail() {
    const input = document.querySelector("input[type=text]");

    const rows = [...document.querySelectorAll("tbody tr")];

    let isDeleted = false;

    for (let row of rows) {
        if (row.children[1].textContent === input.value) {
            row.remove();
            isDeleted = true
        }
    }

    input.value = '';
    if (isDeleted) {
        document.getElementById('result').textContent = 'Deleted.'
    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
}