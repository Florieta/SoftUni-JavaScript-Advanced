function search() {
   const towns = document.querySelectorAll('#towns li');
   const searchText = document.getElementById('searchText').value;
   let matches = 0;

   for (let town of Array.from(towns)) {
       if (town.textContent.includes(searchText)) {
           town.style.textDecoration = 'underline';
           town.style.fontWeight = 'bold';
           matches += 1
       } else {
           town.style.textDecoration = 'none';
           town.style.fontWeight = 'normal';
       }
   }

   document.getElementById('result').textContent = `${matches} matches found`
}