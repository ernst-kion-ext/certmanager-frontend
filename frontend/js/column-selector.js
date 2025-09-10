// Column visibility for sidebar checkboxes

function setupColumnVisibilityListener() {
    const columnCheckboxes = document.querySelectorAll('.column-checkbox');
    // Initial call (in case table is pre-filled)
    updateColumnVisibility();
    // Listen for checkbox changes
    columnCheckboxes.forEach(cb => {
        cb.addEventListener('change', updateColumnVisibility);
    });
}

function updateColumnVisibility() {
    const columnCheckboxes = document.querySelectorAll('.column-checkbox');
    const table = document.querySelector('table');
    const tableHeads = table.querySelectorAll('thead tr:first-child th');
    const searchInputs = document.querySelectorAll('#column-search-row td, #column-search-row th');

    columnCheckboxes.forEach(cb => {
        const colName = cb.getAttribute('data-column');
        const columnIndex = getColumnIndexByLabel(colName);

        // Toggle header
        tableHeads[columnIndex].style.display = cb.checked ? '' : 'none';
        // Toggle search row if present
        if (searchInputs[columnIndex]) {
            searchInputs[columnIndex].style.display = cb.checked ? '' : 'none';
        }
        // Toggle all cells in this column
        columnCells = table.querySelectorAll('tbody tr');
        columnCells.forEach(row => {
            row.children[columnIndex].style.display = cb.checked ? '' : 'none';
        });
    });
}

function getColumnIndexByLabel(label) {
    const tableHeads = document.querySelectorAll('thead tr:first-child th');
    for (let i = 0; i < tableHeads.length; i++) {
        // Remove sort arrows for comparison
        const thText = tableHeads[i].textContent.replace(/[\u25B2\u25BC]/g, '').trim();
        if (thText === label) return i;
    }
    return -1;
}