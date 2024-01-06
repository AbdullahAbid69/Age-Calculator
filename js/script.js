function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dob.getFullYear();

    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    var resultElement = document.getElementById('result');
    resultElement.textContent = "Your age is: " + age + " years.";
}
