function toggleCertificate() {
    var cert = document.getElementById("certificate-container");
    if (cert.style.display === "none" || cert.style.display === "") {
        cert.style.display = "block";
    } else {
        cert.style.display = "none";
    }
}