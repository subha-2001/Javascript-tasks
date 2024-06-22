function formValidate(event) {
    event.preventDefault(); // Prevent the form from submitting

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const sub = document.getElementById("sub");
    const sup = document.getElementById("sup");
    const msg = document.getElementById("msg");
    const tick = document.getElementById("tick");

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(e => e.style.display = "none");

    if (!fname.value.trim()) {
        const error = document.getElementById("error-fname");
        error.textContent = "This field is required";
        error.style.display = "block";
        fname.focus();
        return;
    }

    if (!lname.value.trim()) {
        const error = document.getElementById("error-lname");
        error.textContent = "This field is required";
        error.style.display = "block";
        lname.focus();
        return;
    }

    if (!email.value.trim()) {
        const error = document.getElementById("error-email");
        error.textContent = "This field is required";
        error.style.display = "block";
        email.focus();
        return;
    }

    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value.match(validRegex)) {
        const error = document.getElementById("error-email");
        error.textContent = "Please enter a valid email address";
        error.style.display = "block";
        email.focus();
        return;
    }

    if (!msg.value.trim()) {
        const error = document.getElementById("error-msg");
        error.textContent ="This field is required";
        error.style.display = "block";
        msg.focus();
        return;
    }

    if (!sub.checked && !sup.checked) {
        const error = document.getElementById("error-msg");
        error.textContent = "Please select a query type";
        error.style.display = "block";
        return;
    }
  

    if (!tick.checked) {
        const error = document.getElementById("error-msg");
        error.textContent = "To submit this form, please consent to being contacted";
        error.style.display = "block";
        return;
    }

    // If all validations pass, show the success message
    document.getElementById("sucmsg").style.display = "block";
}

document.querySelector("form.contact").addEventListener("submit", formValidate);
