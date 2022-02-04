function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    gradientBoxElement.addEventListener('mousemove', function(e){
let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
resultElement.textContent = `${percent}%`;
    });
}