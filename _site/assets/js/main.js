$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#exampleTitle'
    })
    .setClassToggle('#exampleTitle', 'fade-in')
    .addTo(controller);
})

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#exercise'
    })
    .setClassToggle('#exercise', 'fade-in')
    .addTo(controller);
})

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#job'
    })
    .setClassToggle('#job', 'fade-in')
    .addTo(controller);
})

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#jobTablet'
    })
    .setClassToggle('#jobTablet', 'fade-up')
    .addTo(controller);
})

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#exerciseTablet'
    })
    .setClassToggle('#exerciseTablet', 'fade-up')
    .addTo(controller);
})


$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#moreWork'
    })
    .setClassToggle('#moreWork', 'fade-up')
    .addTo(controller);
})

$("#button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".contact").offset().top
    }, 2000);
});