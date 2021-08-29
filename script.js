const toggleButton = document.getElementsByClassName("navbar_toggle_btn")[0]
const navbarLinks = document.getElementsByClassName("nav_links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})