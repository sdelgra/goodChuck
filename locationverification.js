window.onload = function() {
    checkLocation();
};

function checkLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                document.getElementById('locationPrompt').style.display = 'none';
                document.getElementById('appContent').style.display = 'block';
                // Proceed with the app initialization
            },
            error => {
                document.getElementById('locationPrompt').style.display = 'block';
                document.getElementById('appContent').style.display = 'none';
                // Display error message
                alert("Location access is required to use this app.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
