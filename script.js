const newsletterContent = document.getElementById('newsletter--content');
const navLinks = document.getElementById('header--nav-links');
let hamburger = false;

newsletterContent.addEventListener("wheel",(evt) => {
    if(window.innerWidth>1150) {
        evt.preventDefault();
        newsletterContent.scrollLeft += evt.deltaY*3;
    }
})

function toggleMenu() {
    hamburger ? navLinks.classList.remove("nav-links_hamburger") : navLinks.classList.add("nav-links_hamburger");
    hamburger = !hamburger;
}

function checkForResize() {
    if(window.innerWidth>700 && navLinks.classList.contains("nav-links_hamburger")) {
        navLinks.classList.remove("nav-links_hamburger");
        hamburger = false;
    }
}

window.onresize = checkForResize;

