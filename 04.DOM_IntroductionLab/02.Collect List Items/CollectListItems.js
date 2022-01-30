function extractText() {
    const items = document.querySelectorAll('#items li');
    const result = [...items].map(e => e.textContent).join('\n');

    document.getElementById('result').textContent = result
}