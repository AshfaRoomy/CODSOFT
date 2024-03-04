const text = document.querySelector(".multiText");

const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() =>{
        text.textContent = "Graphic Designer";
    }, 4000);
    setTimeout(() =>{
        text.textContent = "UI/UX Designer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

// ==========scroll sections active links==========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};