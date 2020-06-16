$(function () {
    // MENU
    $(".menu__btn").on("click", function () {
        $(".nav__menu").toggleClass("active");
        $(".menu__btn").toggleClass("active");
    });

    // SCROLL
    $("[data-scroll]").on("click", function () {
        event.preventDefault();

        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);

        // $(".menu__header").toggleClass("active");
        // $(".menu__btn").toggleClass("active");
        // $(".header__links").removeClass("active__link");
        // $(this).addClass("active__link");
    });
});




