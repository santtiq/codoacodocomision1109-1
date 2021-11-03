const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navmenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label", "Cerrar Manú");
    } else{ 
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});