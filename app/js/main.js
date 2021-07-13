
$('.slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1830,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplaySpeed: 1000,
            }
        },
    ]
});


$(function () {

    $('.nav__btn').on('click', function () {
        $('.nav__list').toggleClass('nav__list--active')
    });
});