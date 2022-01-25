function fromJSONToHTMLTable(inputJSON) {
    let inputArray = JSON.parse(inputJSON);
    let outputArray = ["<table>"];
    outputArray.push(tableHeadings(inputArray[0]));
    inputArray.forEach(record => outputArray.push(tableData(record)));
    outputArray.push("</table>");

    function tableHeadings(input) {
        let headings = '\t<tr>';
        Object.keys(input).forEach(key => {headings += `<th>${escapeHTML(key)}</th>`});
        headings += '</tr>';

        return headings
    }

    function tableData(input) {
        let data = '\t<tr>';
        Object.values(input).forEach(value => data += `<td>${escapeHTML(value)}</td>`);
        data += '</tr>';

        return data
    }

    function escapeHTML(value) {
        return value.toString()
            .trim()
            .replace(/&/g, '&#38;')
            .replace(/</g, '&#60;')
            .replace(/>/g, '&#62;')
            .replace(/"/g, '&#34;')
            .replace(/'/g, '&#39;')
    }

    console.log(outputArray.join('\n'));
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
);

console.log("------");

fromJSONToHTMLTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
);