function sendMessage(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    document.getElementById("response").innerText = "Thank You, " + name + "! Your message has been sent.";

}