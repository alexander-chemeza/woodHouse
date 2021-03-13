$(document).ready(function(){
    $("#calculation-button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(document).ready(function(){
    $("#individual-button").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

$(document).ready(function() {
    $("#create-order-button").on("click", function(event) {
        event.preventDefault();
        $("body").toggleClass('overflow');

        $("#modal-overlay").toggleClass('hidden');
        $("#modal-overlay").animate({opacity: 1}, 500);

        $("#modal-box").toggleClass('hidden');
        $("#modal-box").animate({opacity: 1}, 500);
    });
});

$(document).ready(function() {
    $("#send-request").on("click", function(event) {
        event.preventDefault();
        
        $("#modal-box").animate({opacity: 0}, 500);

        setTimeout(() => {
            $("#modal-box").toggleClass('hidden');
        }, 500);

        $("#modal-info").toggleClass('hidden')
        $("#modal-info").animate({opacity: 1}, 500);
    });
});

$(document).ready(function() {
    $("#close-modal-form").on("click", function(event) {
        event.preventDefault();
        $("body").toggleClass('overflow');
        $("#modal-overlay").animate({opacity: 0}, 500);
        $("#modal-box").animate({opacity: 0}, 500);

        setTimeout(() => {
            $("#modal-box").toggleClass('hidden');
            $("#modal-overlay").toggleClass('hidden');
        }, 500);
    });
});

$(document).ready(function() {
    $("#modal-info-close").on("click", function(event) {
        event.preventDefault();
        $("body").toggleClass('overflow');
        $("#modal-info").animate({opacity: 0}, 500);
        $("#modal-overlay").animate({opacity: 0}, 500);

        setTimeout(() => {
            $("#modal-info").toggleClass('hidden');
            $("#modal-overlay").toggleClass('hidden');
        }, 500);
    });
});

window.addEventListener('DOMContentLoaded', e => {
    const items = document.getElementsByClassName('pi-2')
    for (let i = 0; i < 4; i++) {
        items[i].classList.remove('hidden')
    }
})

document.getElementById('show-all-projects').addEventListener('click', e => {
    const items = document.getElementsByClassName('pi-2')
    for (let item of items) {
        item.classList.remove('hidden')
    }
})