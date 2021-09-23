function fromJSONToHTML(input) {
    const inputJSON = JSON.parse(input);

    let result = '<table>\n<tr>';
    const colNames = Object.keys(inputJSON[0]);
    for (const col of colNames) {
        result += `<th>${symEscape(col)}</th>`;
    }
    result += '</tr>\n';
    for (const obj of inputJSON) {
        result += '<tr>'
        for (const data of Object.values(obj)) {
            result += `<td>${symEscape(data)}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</table>';
    return result;

    function symEscape(str) {
        return str
        .toString()
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#39;')
    }
};

console.log(fromJSONToHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`
));