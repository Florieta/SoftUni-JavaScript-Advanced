function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
//       let searchElement = document.getElementById('searchField').value;
//       let rowsElement = Array.from(document.querySelectorAll('.container tbody tr'));

//       rowsElement.forEach(el => {
//          el.className = '';
//       });

//       let filteredRows = rowsElement.filter(el => {
//          let values = Array.from(el.children);
//          if(values.some(x => x.textContent.includes(searchElement))){
//             x.className = 'select';
//          }
//       });
// searchElement.value = '';
    const searchField = document.getElementById('searchField');
    const inputValue = searchField.value;
    const container = document.querySelector('.container');
    const tableRows = Array.from(container.querySelectorAll('tbody tr'));

    tableRows.forEach(tr => {
      const text = tr.textContent;
      if (text.includes(inputValue)) {
        tr.classList.add('select')
      } else {
        tr.classList.remove('select');
      }
    })
    // Clear search field
    searchField.value = '';

   }
}