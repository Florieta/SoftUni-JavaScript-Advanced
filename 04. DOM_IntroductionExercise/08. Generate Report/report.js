function generateReport() {
    let checkBoxes = document.getElementsByTagName('input');
    let rows = document.querySelectorAll('tbody tr');
    let result = document.getElementById('output');
    let resultArray = [];

    if (checkBoxes.length < 1) {
        return;
    }

    for (let i = 0; i < rows.length; i++) {
        let obj = {};
        for (let y = 0; y < checkBoxes.length; y++) {
            if (checkBoxes[y].checked) {
                obj[checkBoxes[y].name] = rows[i].children[y].textContent;
            }
        }
        resultArray.push(obj);
    }

    result.textContent = JSON.stringify(resultArray);
}