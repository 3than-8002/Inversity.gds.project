// Placeholder search function (can be expanded with real functionality)
function searchFunction() {
    const query = document.getElementById('search-bar').value;
    alert('Searching for: ' + query);
}
// Add click event listeners to the tab links
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove 'active' class from all content and links
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link and its corresponding content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        this.classList.add('active');
    });
});
