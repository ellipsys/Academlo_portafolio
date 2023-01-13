const listNav = document.querySelector(".listNav")
const mobileMenu = document.querySelector(".mobile")

mobileMenu.addEventListener("click", function() {
    listNav.classList.toggle("menu_desktop");
    
})