function solve() {
    const input = document.getElementById('input');
    const result = document.getElementById('result');
    let selectMenuTo = document.getElementById('selectMenuTo');

    let optionBinary = document.createElement('option');
    optionBinary.setAttribute('value', 'binary');
    optionBinary.textContent = 'Binary';
    selectMenuTo.appendChild(optionBinary);

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.setAttribute('value', 'hexadecimal');
    optionHexadecimal.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(optionHexadecimal);

    document.querySelector('button').addEventListener('click', convert);

    function convert() {
       if (selectMenuTo.value === 'binary') {
           result.value = Number(input.value).toString(2)
       } else if (selectMenuTo.value === 'hexadecimal') {
           result.value = Number(input.value).toString(16).toUpperCase()
       }
    }
}