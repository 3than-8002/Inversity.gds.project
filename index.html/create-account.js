// Handle account creation form submission
document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get the username and password values
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    // Store the username and password in localStorage (persistent storage across page reloads)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to the login page after account creation
    window.location.href = 'login.html';
});
