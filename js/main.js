const prjSwiper = new Swiper('#project-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.prj-next-item',
        prevEl: '.prj-prev-item',
      },
    breakpoints: {
        360: {
            slidesPerView: 1
        }, 
        480: {
            slidesPerView: 1
        },
        560: {
            slidesPerView: 1
        },
        640: {
            slidesPerView: 1
        },
        767: {
            slidesPerView: 1
        },
        960: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 3
        },
        1366: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 4
        },
        1920: {
            slidesPerView: 4
        }
    }
})