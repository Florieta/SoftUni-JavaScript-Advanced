function solve() {
  const text = document.getElementById('input').value.split('.').filter(item => item !== '');
  let paragraph = '';
  let output = '';

  for (let i = 1; i <= text.length; i++) {
      paragraph += (text[i-1] + '.');

      if (i % 3 === 0) {
          output += `<p>${paragraph}</p>`;
          paragraph = '';
      }
  }

  if (paragraph) {output += `<p>${paragraph}</p>`}

  document.getElementById('output').innerHTML = output
}