function solve() {
  let sentences = document.getElementById('input').value.split('.').filter((el) => el != '');
  const outputField = document.getElementById('output');

  for (let i = 0; i < sentences.length; i += 3) {
    let result = [];
    for (let j = 0; j < 3; j++) {
      if (sentences[i + j]) {
        result.push(sentences[i + j])
      }
    }
    let current = result.join('. ') + '.';
    outputField.innerHTML += `<p>${current}</p>`;
  }
}