function mailValidate() {
    const result=document.getElementById("result");
    const email=document.getElementById("emailbox").value.trim();
    if(!email) {
        result.textContent="Please provide a valid email address";
        emailbox.style.border="1px solid red";
        emailbox.style.color="red";
        result.style.color="red";
        
        return;

    }
    var validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email.match(validRegex)) {
        result.textContent="Please provide a valid email address";
        emailbox.style.border="1px solid red";
         result.style.color="red";
        emailbox.style.color="red";
        
    }
    else {
        window.location.href="index.html"
    }



}  