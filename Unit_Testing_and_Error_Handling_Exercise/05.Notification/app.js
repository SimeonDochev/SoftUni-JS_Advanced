function notify(message) {
  const outputField = document.getElementById('notification');
  outputField.textContent = message;
  outputField.style.display = 'block';
  outputField.addEventListener('click', () => outputField.style.display = 'none');
}