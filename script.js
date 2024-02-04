var emailSection = document.getElementById("email-section");
var emailError = document.getElementById("email-error");

function validateEmail() {
    if (!emailSection.value.match(/^[A-Za-z\._\-0-9]*@[A-Za-z]*\.[a-z]{3,4}$/)) {
        emailError.innerHTML = "Please provide a valid email address";
        emailSection.style.borderColor = "red";
        return false;
    }

    emailError.innerHTML = "";
    emailSection.style.borderColor = "#c2d3ff";
    return true;
}