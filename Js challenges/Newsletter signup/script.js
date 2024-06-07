function mailValidate() {
    const email = document.getElementById("emailbox").value.trim();
    const result = document.getElementById("result");
    if (!email) {
        result.textContent = "Valid email required";
        emailbox.style.color="red";
        emailbox.style.border="1px solid red";
        return;
    }
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.match(validRegex)) {
        result.textContent="";
        window.location.href=`success.html?email=${encodeURIComponent(email)}`;
    }else {
        result.textContent="Valid email required";
        emailbox.style.color="red";
        emailbox.style.border="1px solid red";
    }
}