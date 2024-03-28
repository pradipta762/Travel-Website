const hamburgerMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-link");

// Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
    }
});

const navItem = document.querySelectorAll(".nav-item");
navItem.forEach((navList) => {
    navList.addEventListener("click", () => {
        navList.classList.add("active");
        setTimeout(() => {
            navList.classList.remove("active");
        }, 100);
    })
})


// Mode change
let lightMode = document.querySelector(".light-mode");
let darkMode = document.querySelector(".dark-mode");
let body = document.querySelector(".body");

darkMode.addEventListener("click", () => {
    lightMode.style.display = "block";
    darkMode.style.display = "none";
    body.classList.add("change-mode");
})

lightMode.addEventListener("click", () => {
    darkMode.style.display = "block";
    lightMode.style.display = "none";
    body.classList.remove("change-mode");
})


// Swiper Section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        925: {
            slidesPerView: 3.2,
        },
        600: {
            slidesPerView: 2.1,
        },
        200: {
            slidesPerView: 1.1,
        }
    }
});   


// Video Play Button
const videoPlay = document.querySelector(".video-play");
const videoClose = document.querySelector(".video-close");
const videoPopUp = document.querySelector(".video-popup");

videoPlay.addEventListener("click", (event) => {
    event.preventDefault();
    videoPopUp.style.display = "block";
});

videoClose.addEventListener("click", (event) => {
    if (event.target.classList.contains("close") || event.target == videoPopUp) {
        videoPopUp.style.display = "none";
    }
});