const itemMenu = document.querySelectorAll('.menu-item')

itemMenu.forEach(function (item) {
    //cách 1
    // item.addEventListener("click", function () {
    //     itemMenu.forEach(function (item) {
    //         item.classList.remove('active')
    //     })
    //     this.classList.add('active')
    // })
    //cách 2
    item.addEventListener("click", function () {
        [...item.parentElement.children].forEach(sib => sib.classList.remove('active'))
        item.classList.add('active')
    })
})

//Slider banner
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("top-banner__slidding-item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: swiper,
    },
});

var swiper3 = new Swiper(".onl-sale__list", {
    slidesPerView: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});