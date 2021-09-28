function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searched = document.getElementById('searchField').value.toLowerCase();
      const tableRows = document.querySelectorAll('tbody tr');

      for (let row of tableRows) {
         let rowTextLower = row.textContent.toLowerCase();
         if (rowTextLower.includes(searched) && searched != '') {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      }
      document.getElementById('searchField').value = '';
   }
}