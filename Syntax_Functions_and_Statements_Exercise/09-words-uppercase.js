function wordsUppercase(text) {
    const wordsList = text.split(/\W+/g);

    let result = [];
    for (const el of wordsList) {
        if (el != '') {
        result.push(el.toUpperCase());
        }
    }

    return result.join(', ');
}

console.log(wordsUppercase('Hello, how are you?'));
