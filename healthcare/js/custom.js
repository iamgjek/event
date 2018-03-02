$(document).ready(function() {
// slick
    $('.slide-loop').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        centerMode: true,
        draggable: true,
        variableWidth: true,
        nextArrow: '<button type="button" class="slick-next-carousel">Next</button>',
        prevArrow: '<button type="button" class="slick-prev-carousel">Previous</button>'
    });
    $('.sub-5-loop').slick({
        infinite: true,
        slidesToShow: 5,
        lazyLoad: 'progressive',
        slidesToScroll: 1
    });
    $('.sub-5-loop-noarrow').slick({
        infinite: true,
        slidesToShow: 5,
        lazyLoad: 'progressive',
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false
    });
    $('.sub-1-loop').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        draggable: true,
        nextArrow: '<button type="button" class="slick-next-1">Next</button>',
        prevArrow: '<button type="button" class="slick-prev-1">Previous</button>'
    });
    $('.sub-1-loop-noarrow').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
        draggable: true,
        nextArrow: false,
        prevArrow: false
    });
    $('.sub-3-loop').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        lazyLoad: 'progressive',
        slidesToScroll: 1,
        draggable: true,
        nextArrow: false,
        prevArrow: false
    });
    $('.sub-2-loop').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        lazyLoad: 'progressive',
        slidesToScroll: 1,
        draggable: true,
        nextArrow: false,
        prevArrow: false
    });
    $('.content-3-loop').slick({
        infinite: true,
        slidesToShow: 3,
        lazyLoad: 'progressive',
        slidesToScroll: 1
    });
    // $(".more").click(function() {
    //     $(".more-article").toggle();
    // });
    $(".more").click(function() {
        $(".more-article").toggle();
        $(".more").hide();
    });
});

// go to top
$(function() {
    $('.scroll-top').click(function() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({scrollTop: 0}, 600);
        return false;
    });
});
