/*Constact*/
function sendMessage(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    document.getElementById("response").innerText =
        "Thank you, " + name + ". Your message has been sent to ESSENCE.";
}

/*Login*/
function validateLogin() {
    window.location.href = "home.html";
    return false;
}

/*Signup*/
function validateSignup() {
    let password = document.getElementById("signupPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (password !== confirm) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Account created successfully! Redirecting to login...");
    window.location.href = "login.html";
    return false;
}
