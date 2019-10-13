/*sticky navigation*/
$(".js--section-features").waypoint(function (direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    }
    else {
        $("nav").removeClass("sticky");
    }
}, {
    offset: "60px"
});


/*scroll buttons*/

$('.btn-to-plan').click(function () {
    $('html,body').animate({ scrollTop: $('.js-prices').offset().top }, 1000);
});


$('.btn-to-start').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
});

/*Navigation scroll*/

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top},500,'linear')
})

/*Animation on scroll*/

$(".js-wp-1").waypoint(function(direction){
    $(".js-wp-1").addClass("animated fadeIn");
},{
    offset:"50%"
});

$(".js-wp-2").waypoint(function(direction){
    $(".js-wp-2").addClass("animated fadeInUp");
},{
    offset:"50%"
});

$(".js-wp-3").waypoint(function(direction){
    $(".js-wp-3").addClass("animated fadeIn");
},{
    offset:"50%"
});

$(".js-wp-4").waypoint(function(direction){
    $(".js-wp-4").addClass("animated pulse");
},{
    offset:"50%"
});

/* mobile navigation */


$(".mobile-nav-icon").click(function(){
    var nav = $(".js-main-nav");
    nav.slideToggle(200)
}) 
