document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', openPopup);
    document.getElementById('overlay').addEventListener('click', closePopup);
    document.getElementById('patientOutcomeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        submitPatientOutcome();
    });
});

function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function submitPatientOutcome() {
    // You can add logic here to submit data to Google Sheets or any other backend service.
    // For simplicity, this example just closes the popup.
    closePopup();
}
