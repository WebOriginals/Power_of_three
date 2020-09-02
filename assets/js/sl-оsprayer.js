var swiper = new Swiper('.sl-оsprayer', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});