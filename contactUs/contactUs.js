document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
        // Here you can add code to send the form data to your server using AJAX or other methods
    } else {
        alert('Please fill out all fields.');
    }
});