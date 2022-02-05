function focused() {
    const inputs = [...document.getElementsByTagName('input')];

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(evt) {
        evt.target.parentNode.classList.add('focused')
    }

    function onBlur(evt) {
        evt.target.parentNode.classList.remove('focused')
    }
}