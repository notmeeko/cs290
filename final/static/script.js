document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
        fetch('/write', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Display a styled alert with the message
            var alert = document.createElement('div');
            alert.className = 'alert success';
            alert.textContent = data.message;
            document.body.appendChild(alert);
            setTimeout(function() {
                alert.remove();
            }, 3000); // Remove the alert after 3 seconds
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});