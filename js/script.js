var vw = ($('html').css('font-size').replace('px', ''));
//console.log(vw);
function init() {
    if ($(".banner_main .swiper").length) {
        var swiper_img = new Swiper(".banner_main .swiper", {
            effect: "fade",
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            speed:1000,
            allowTouchMove: false,
            autoplay: {
                delay:5000,
                disableOnInteraction: false
            },
            //autoplay:false,
        });
    }
}

function _sticky() {
    var winscroll = $(window).scrollTop();
    if (winscroll >= vw * 10) {
        $("body").addClass("sticky");
    } else {
        $("body").removeClass("sticky");
    }
}

$(function () {
    init();
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
