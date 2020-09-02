var swiper = new Swiper('.hedaer-sl', {
    // autoplay: {
    //     delay: 5000,
    // },
    loop:true,
    pagination: {
        el: '.hedaer-sl-pagination',
        clickable: true,

    },
    navigation: {
        nextEl: '.hedaer-btn-next',
        prevEl: '.hedaer-btn-prev',
    },
});