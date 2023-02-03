// A function that renders a table with 100 rows and 52 columns
// Each 5th row has a label of its order
// Each 5th column has a label of its order

function renderTable(ageInWeeks) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
    var row, cell, week;
    var counter = 1;

    for (var row_ix = 0; row_ix < 100; row_ix++) {
        if (row_ix % 5 === 0) {
            row = document.createElement('tr');
            row.className = 'row-space';
            tableBody.appendChild(row);
        }
        row = document.createElement('tr');

        for (var col_ix = 0; col_ix < 52; col_ix++) {
            if (col_ix % 5 === 0) {
                cell = document.createElement('td');
                cell.className = 'col-space';
                row.appendChild(cell);
            }
            cell = document.createElement('td');
            week = document.createElement('div');
            week.className = 'week';
            if (counter <= ageInWeeks) {
                week.className += ' filled';
            }
            week.id = 'week-' + counter;
            cell.appendChild(week);
            row.appendChild(cell);
            counter++;
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}