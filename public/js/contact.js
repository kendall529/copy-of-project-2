//submit clears out the contact form
document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#message").value = "";
});
