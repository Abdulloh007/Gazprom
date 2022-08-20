
new Swiper(`.g-galary__slider`, {
    navigation: {
    nextEl: `.g-galary__slider__navigation .g-bsn__btn.next`,
    prevEl: `.g-galary__slider__navigation .g-bsn__btn.prev`,
    },
    autoplay: true,
    slidesPerView: 6,
    spaceBetween: 15,
    loop: true
});