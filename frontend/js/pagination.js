// Pagination module

// Pagination state
const paginationState = {
    currentPage: 1,
    entriesPerPage: 25,
    totalPages: 1
};

// Initialize pagination controls
function initPagination() {
    setupPaginationListeners();
}

// Setup pagination listeners
function setupPaginationListeners() {
    // Page navigation buttons
    document.getElementById('first-page-btn').addEventListener('click', () => {
        if (paginationState.currentPage !== 1) {
            paginationState.currentPage = 1;
            document.dispatchEvent(new CustomEvent('pagination:pageChanged'));
        }
    });
    
    document.getElementById('prev-page-btn').addEventListener('click', () => {
        if (paginationState.currentPage > 1) {
            paginationState.currentPage--;
            document.dispatchEvent(new CustomEvent('pagination:pageChanged'));
        }
    });
    
    document.getElementById('next-page-btn').addEventListener('click', () => {
        if (paginationState.currentPage < paginationState.totalPages) {
            paginationState.currentPage++;
            document.dispatchEvent(new CustomEvent('pagination:pageChanged'));
        }
    });
    
    document.getElementById('last-page-btn').addEventListener('click', () => {
        if (paginationState.currentPage !== paginationState.totalPages) {
            paginationState.currentPage = paginationState.totalPages;
            document.dispatchEvent(new CustomEvent('pagination:pageChanged'));
        }
    });

    document.addEventListener('pagination:pageChanged', function() {
        renderTable(getFilteredCertificates());
    });
    
    document.addEventListener('pagination:entriesPerPageChanged', function() {
        renderTable(getFilteredCertificates());
    });

    
    // Entries per page select
    document.getElementById('entries-per-page-select').addEventListener('change', (e) => {
        paginationState.entriesPerPage = parseInt(e.target.value, 10);
        paginationState.currentPage = 1;
        document.dispatchEvent(new CustomEvent('pagination:entriesPerPageChanged'));
    });
}

// Reset pagination to first page
function resetPagination() {
    paginationState.currentPage = 1;
    document.dispatchEvent(new CustomEvent('pagination:pageChanged'));
}

// Update pagination UI based on data
function updatePaginationUI(data) {
    // Update total pages
    paginationState.totalPages = Math.ceil(data.length / paginationState.entriesPerPage);
    
    // Ensure current page is valid
    if (paginationState.currentPage > paginationState.totalPages && paginationState.totalPages > 0) {
        paginationState.currentPage = Math.max(1, paginationState.totalPages);
    }
    
    // Update pagination info
    document.getElementById('showing-start').textContent = data.length ? ((paginationState.currentPage - 1) * paginationState.entriesPerPage) + 1 : 0;
    document.getElementById('showing-end').textContent = Math.min(paginationState.currentPage * paginationState.entriesPerPage, data.length);
    document.getElementById('total-entries').textContent = data.length;
    document.getElementById('current-page').textContent = paginationState.totalPages ? paginationState.currentPage : 0;
    document.getElementById('total-pages').textContent = paginationState.totalPages;
    
    // Enable/disable pagination buttons
    document.getElementById('first-page-btn').disabled = paginationState.currentPage === 1 || data.length === 0;
    document.getElementById('prev-page-btn').disabled = paginationState.currentPage === 1 || data.length === 0;
    document.getElementById('next-page-btn').disabled = paginationState.currentPage === paginationState.totalPages || data.length === 0;
    document.getElementById('last-page-btn').disabled = paginationState.currentPage === paginationState.totalPages || data.length === 0;
}

// Get current page data
function getCurrentPageData(data) {
    const startIdx = (paginationState.currentPage - 1) * paginationState.entriesPerPage;
    const endIdx = Math.min(startIdx + paginationState.entriesPerPage, data.length);
    return data.slice(startIdx, endIdx);
}

// Expose pagination module
window.pagination = {
    state: paginationState,
    init: initPagination,
    reset: resetPagination,
    updateUI: updatePaginationUI,
    getCurrentPageData: getCurrentPageData
};