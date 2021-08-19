$(document).ready(function() {
    $('.hero-slider').slick({
        dots: true,

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
    $('.header__burger').click(function() {
        $('.header__burger, .header__mobile, body').toggleClass('active');
    });

    $('.footer__item-title').click(function() {
        $(this).toggleClass('active').next().slideToggle(400);
    });
    $('.new-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,

        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.05,
                    infinite: false,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    })
})