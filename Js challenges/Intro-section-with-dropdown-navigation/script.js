function dropdownItems(button) {
    const h4 = button.parentNode;
    const content = h4.nextElementSibling;
    const icon = button.querySelector(".drop-img");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.src = "images/icon-arrow-up.svg";
    } else {
        content.style.display = "none";
        icon.src = "images/icon-arrow-down.svg";
    }
};

function toggleMenu() {
    const head = document.querySelector(".head");
    head.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".mobile-menu-icon img");
    const closeMenuIcon = document.createElement("img");
    closeMenuIcon.src = "images/icon-menu.svg";
    closeMenuIcon.classList.add("close-menu-icon");
    closeMenuIcon.addEventListener("click", toggleMenu);
    document.body.appendChild(closeMenuIcon);

    menuIcon.addEventListener("click", toggleMenu);

    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", (event) => {
            const content = event.target.closest("h4").nextElementSibling;
            content.style.display = content.style.display === "none" ? "block" : "none";
        });
    });
});
