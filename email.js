(function() {
    emailjs.init({
        publicKey: "UFJ4Q3Zcyu8qj0LVV",
    });
})();

window.onload = function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('contact_service', 'contact_form', this)
        .then(() => {
            console.log('Success!');
            alert("Message set successfully!")
        }, (error) => {
            console.log('Failed to send message', error);
            alert("Failed to send message. Try again.")
        });
    });
}