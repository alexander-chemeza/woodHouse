const prjSwiper = new Swiper('#project-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.prj-next-item',
        prevEl: '.prj-prev-item',
      },
    breakpoints: {
        320: {
            slidesPerView: 1
        }, 
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

const testimonialsSwiper = new Swiper('#testimonials-slider', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.testimonials-slider-next',
        prevEl: '.testimonials-slider-prev',
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

const testimonialsVideos = new Swiper('#testimonials-videos', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.video-prev',
        prevEl: '.video-next',
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
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 2
        },
        1366: {
            slidesPerView: 2
        },
        1440: {
            slidesPerView: 2
        },
        1600: {
            slidesPerView: 2
        },
        1920: {
            slidesPerView: 2
        }
    }
})