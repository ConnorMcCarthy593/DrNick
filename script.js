document.addEventListener('DOMContentLoaded', function () {
     // Wait for the DOM to be fully loaded
    
    // Get a reference to the button element by its id
    var submitButton = document.getElementById('submitBtn');

    // Add an event listener to the button
    submitButton.addEventListener('click', function () {
        // This function will be called when the button is clicked
        openPopup();
    });
    
    //document.getElementById('submitBtn').addEventListener('click', openPopup);
    document.getElementById('overlay').addEventListener('click', closePopup);
    document.getElementById('patientOutcomeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        submitPatientOutcome();
    });
});

function openPopup() {
    var popup = document.getElementById('popup');
     popup.style.display = 'block';
    //document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    console.log('openPopup function called!');
}

// Optional: Add a function to close the popup
    window.closePopup = function () {
        var popup = document.getElementById('popup');
        popup.style.display = 'none';
    };

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitPatientOutcome() {
    // You can add logic here to submit data to Google Sheets or any other backend service.
    // For simplicity, this example just closes the popup.
    console.log('submitPatientOutcome function called!');
    closePopup();
}
