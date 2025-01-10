// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve the stored username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Get the entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Validate the credentials
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        // Redirect to the home page if the credentials are correct
        window.location.href = 'home.html';
    } else {
        // Show error message if credentials are incorrect
        document.getElementById('error-message').classList.remove('hidden');
    }
});
