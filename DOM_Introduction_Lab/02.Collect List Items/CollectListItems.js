function extractText() {
    const result = [];
    const items = document.getElementById('items').children;

    for (const item of Array.from(items)) {
        result.push(item.textContent);
    }

    document.getElementById('result').textContent = result.join('\n');
}