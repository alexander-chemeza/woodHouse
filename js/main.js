// Array for multiple sliders
const swiperArray = []
let quizCounter = 0;
// Single sliders
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

const testimonialsVideos = new Swiper('#testimonials-videos', {
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.video-prev',
        prevEl: '.video-next',
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

window.addEventListener('DOMContentLoaded', e => {
    // Check number of inner sliders and its controls
    const projectItemSliders = document.getElementsByClassName('project-item-slider')
    const projectItemSlidersPrev = document.getElementsByClassName('project-item-slider-prev')
    const projectItemSlidersNext = document.getElementsByClassName('project-item-slider-next')

    // Add divided class names for controls and slider boxes
    for (let i = 0; i < projectItemSlidersPrev.length; i++) {
        projectItemSlidersPrev[i].classList.add(`inner-slider-prev-${i}`)
    }

    for (let i = 0; i < projectItemSlidersNext.length; i++) {
        projectItemSlidersNext[i].classList.add(`inner-slider-next-${i}`)
    }

    // Our slider magic
    for (let i = 0; i < projectItemSliders.length; i++) {
        // Firstly, add divided name of slider
        projectItemSliders[i].classList.add(`inner-slider-${i}`)
        // Then push it in array
        swiperArray.push(new Swiper(`.inner-slider-${i}`, {
            loop: true,
            slidesPerView: 1,
            slidesPerGroup: 1,
            navigation: {
                nextEl: `.inner-slider-next-${i}`,
                prevEl: `.inner-slider-prev-${i}`
            }
        }))
    }

    const quizItems = document.getElementsByClassName('offer-form__content')
    for (let item of quizItems) {
        item.classList.add('hidden')
    }
    quizItems[0].classList.remove('hidden')

    const next = document.getElementById('next-quiz')
    next.addEventListener('click', e => {
        e.preventDefault();
        quizCounter++;
        const progress = document.getElementById('progress');
        let percent = ((quizCounter + 1) / quizItems.length) * 100;

        if(quizCounter === quizItems.length - 1) {
            next.classList.add('hidden')
        }
        for (let item of quizItems) {
            item.classList.add('hidden')
        }
        quizItems[quizCounter].classList.remove('hidden')
        progress.innerText = `Вопрос ${quizCounter+1} из ${quizItems.length}`;
        progress.style.width = `${percent}%`
    })
})