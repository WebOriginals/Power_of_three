var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    clickable:true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    },
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
    autoHeight: true,
    spaceBetween: 10,
    simulateTouch:false,
    thumbs: {
        swiper: galleryThumbs
    }
});