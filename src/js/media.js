new Swiper(`.g-active-project__slider`, {
    navigation: {
    nextEl: `.g-active-project__slider__navigation .g-bsn__btn.next`,
    prevEl: `.g-active-project__slider__navigation .g-bsn__btn.prev`,
    },
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        }
    }
});
new Swiper(`.g-media__slider`, {
    navigation: {
    nextEl: `.g-media__slider__navigation .g-bsn__btn.next`,
    prevEl: `.g-media__slider__navigation .g-bsn__btn.prev`,
    },
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        }
    }
});
// new Swiper(`.g-about__slider`, {
//     navigation: {
//         nextEl: `.g-about__slider__navigation .g-bsn__btn.next`,
//         prevEl: `.g-about__slider__navigation .g-bsn__btn.prev`,
//     },
//     autoplay: true,
//     spaceBetween: 0,
//     loop: true
// });
new Swiper(`.g-printed__slider`, {
    navigation: {
    nextEl: `.g-printed__slider__navigation .g-bsn__btn.next`,
    prevEl: `.g-printed__slider__navigation .g-bsn__btn.prev`,
    },
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            
        }
    }
});
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