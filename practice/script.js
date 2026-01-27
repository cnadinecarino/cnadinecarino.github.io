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

function saveOrderDetails(event) {
    event.preventDefault();
 
    const paymentMethod =
        document.querySelector('input[name="payment"]:checked')?.value;
 
    const deliveryOption =
        document.getElementById("delivery")?.value;
 
    if (!paymentMethod || !deliveryOption) {
        alert("Please select both payment and delivery options.");
        return;
    }
 
    localStorage.setItem("paymentMethod", paymentMethod);
    localStorage.setItem("deliveryOption", deliveryOption);
    localStorage.setItem("orderStatus", "Confirmed");
 
    window.location.assign("confirmation.html");
}
 
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("payment")?.textContent =
        localStorage.getItem("paymentMethod") ?? "N/A";
 
    document.getElementById("delivery")?.textContent =
        localStorage.getItem("deliveryOption") ?? "N/A";
 
    document.getElementById("status")?.textContent =
        localStorage.getItem("orderStatus") ?? "Pending";
});
 