const newsletterContent = document.getElementById('newsletter--content');
const navLinks = document.getElementById('header--nav-links');
let hamburger = false;
window.onresize = checkForResize;

// Horizontal scroller
newsletterContent.addEventListener("wheel",(evt) => {
    if(window.innerWidth>1150) {
        evt.preventDefault();
        newsletterContent.scrollLeft += evt.deltaY*3;
    }
})

// Open and close the hamburger menu
function toggleMenu() {
    hamburger ? navLinks.classList.remove("nav-links_hamburger") : navLinks.classList.add("nav-links_hamburger");
    hamburger = !hamburger;
}

// Restyle navlinks if the window is resized with the hamburger menu open
function checkForResize() {
    if(window.innerWidth>700 && navLinks.classList.contains("nav-links_hamburger")) {
        navLinks.classList.remove("nav-links_hamburger");
        hamburger = false;
    }
}



