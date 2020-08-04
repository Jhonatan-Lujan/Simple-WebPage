const navSlide = () => {
    const menuSPhone = document.querySelector(".menuSPhone");
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll(".navLinks span")
    menuSPhone.addEventListener('click',()=>{
        nav.classList.toggle('navActive')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index/7 + 0.25}s`
            }
        })
        menuSPhone.classList.toggle("toggle")
    });
}

navSlide();