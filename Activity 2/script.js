function sendMessage(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    document.getElementById("response").innerText =
        "Thank you, " + name + ". Your message has been sent to ESSENCE.";
}
