

$(document).ready(function () {

    $('#kri').owlCarousel({
        slideSpeed: 3000,
        center: true,
        items: 3,
        nav: false,
        loop: true,
        dots: false,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        // autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1

            },
            600: {
                items: 3
            },
            1000: {
                items: 1
            }
        }
    });





    new WOW().init();

    var owl = $('#Banner');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();





    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });



    
$('#last').owlCarousel({
loop:true,
margin:10,
nav: false,
loop: true,
dots: false,
autoplay: true,
responsive:{
0:{
    items:1
},
600:{
    items:3
},
1000:{
    items:5
}
}
})

});
