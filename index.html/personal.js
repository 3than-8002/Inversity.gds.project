document.getElementById('personal-info-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form data
    const address = document.getElementById('address').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const dob = document.getElementById('dob').value;

    // Validate card number (basic validation for length and digits)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert('Card number must be 16 digits.');
        return;
    }

    // Save the data (for this example, log it to the console)
    const userData = {
        address,
        cardNumber,
        dob
    };
    console.log('Saved Data:', userData);

    // Show success message
    alert('Your information has been saved successfully!');
    
    // Optionally, clear the form
    document.getElementById('personal-info-form').reset();
});
