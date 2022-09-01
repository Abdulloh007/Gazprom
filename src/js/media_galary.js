
new Swiper(`.g-galary__slider`, {
    navigation: {
    nextEl: `.g-galary__slider__navigation .g-bsn__btn.next`,
    prevEl: `.g-galary__slider__navigation .g-bsn__btn.prev`,
    },
    autoplay: true,
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,

        }
    }
});