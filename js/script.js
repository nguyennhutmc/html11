var vw = ($('html').css('font-size').replace('px', ''));
//console.log(vw);
function init() {
    $('body').addClass($("main").attr("class"));
}

function _sticky() {
    var winscroll = $(window).scrollTop();
    if (winscroll >= vw * 10) {
        $("body").addClass("sticky");
    } else {
        $("body").removeClass("sticky");
    }
}
$(window).load(function() {
    
    //   $('.gallery-section .row').masonry({
    //     // options
    //     itemSelector: '.grid-item',
    //     //percentPosition: true
    // });
});
$(function () {
    init();
});
var lastScrollTop = 0;
$(window).on("scroll", function (event) {
    _sticky();
});
