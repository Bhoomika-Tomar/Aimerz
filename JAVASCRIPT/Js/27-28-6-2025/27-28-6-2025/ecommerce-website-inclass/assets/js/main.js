const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



function imgGallery() {
    const mainImg = document.querySelector(".details__img");
    const smallImg = document.querySelectorAll(".details__small-img");
    console.log(smallImg);

    smallImg.forEach((img) => {
        img.addEventListener('click', function () {
            mainImg.src = this.src;
        })
    })

}
imgGallery();

let swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24
        },

    }
}

)

let swiperProducts=new Swiper(".new__container",{
      spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24
        },
       
        1400: {
            slidesPerView: 4,
            spaceBetween: 24
        },

    }
})