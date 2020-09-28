$(function() {

    'use strict';

    // loader
    $.fakeLoader({
        spinner: "spinner4",
        bgColor: "#ffffff"
    });

   // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }

    });

    // our work
    $('.our-work').each(function() { 
        $(this).magnificPopup({
            delegate: '.portfolio-popup',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

      
});