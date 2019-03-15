//-----Smooth page scrolling and arrow

$(document).ready(function () {
    var scrollLink = $('.scroll');

    scrollLink.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    })

});


//------Scroll up button


$(document).ready(function () {
    var offset = 250;
    var duration = 300;

    $(window).scroll(function () {

        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);

        }

    });

    $('.back-to-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, duration);

        return false;

    })

});


//Scroll on fixed header Desktop/Tablet versions

$(window).scroll(function () {

        var $win = $(window);
        var winH = $win.height();

        if ($(window).scrollTop() >= winH) {

            $('nav').addClass('fixed-header');

        } else {
            
            $('nav').removeClass('fixed-header');
        }
    })
    // If the page is resized
    .on("resize", function () {
        winH = $(this).height();
});
