function create(words) {
   const contentField = document.getElementById('content');

   for (let word of words) {
      const newDiv = document.createElement('div');
      const newParagraph = document.createElement('p');
      newParagraph.style.display = 'none';
      newParagraph.textContent = word;
      newDiv.addEventListener('click', onClick);
      newDiv.appendChild(newParagraph);
      contentField.appendChild(newDiv);
   }

   function onClick (ev) {
      ev.currentTarget.firstElementChild.style.display = '';
   }
}