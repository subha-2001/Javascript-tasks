function readInfo(button) {
    const content = button.parentElement.nextElementSibling;
    const icon = button.querySelector('img');
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.src = "assets/images/icon-minus.svg";
    } else {
        content.style.display = "none";
        icon.src = "assets/images/icon-plus.svg";
    }
}
