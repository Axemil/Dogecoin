$(document).ready(function(e) {

    $('.language_header').click(() => {
        $('.language_header svg').toggleClass('language_arrow_icon');
        $('.language_list').toggle();
    })

    //Button on scroll reveal
    $(window).scroll(function() {
        $(".rocket_lamp-1").css("transform", "translateY(" + -($(window).scrollTop() / 10) + "px)");
        $(".rocket_lamp-2").css("transform", "translateY(" + -($(window).scrollTop() / 10) + "px) rotateY(180deg)");
        $(".rocket_lamp-3").css("transform", "translateY(" + -($(window).scrollTop() / 10) + "px)");
        $(".rocket_lamp-4").css("transform", "translateY(" + -($(window).scrollTop() / 10) + "px) rotateY(180deg)");
        $(".rocket_lamp-5").css("transform", "translateY(" + -($(window).scrollTop() / 10) + "px)");
        $('.dogo_rocket').css({"top": -$(window).scrollTop() / 10, "left": $(window).scrollTop() / 10});
        if ($(window).scrollTop() > 100) {
            $('.bounty_campain').addClass('bounty_campain_active');
            $('.rocket_dogo_star').addClass('rocket_dogo_star_active');
            $('.header_wrapper').addClass('header_wrapper_active');
            // $('.dogo_rocket').addClass('dogo_rocket_active');
        } else {
            $('.bounty_campain').removeClass('bounty_campain_active');
            $('.rocket_dogo_star').removeClass('rocket_dogo_star_active');
            $('.header_wrapper').removeClass('header_wrapper_active');
            // $('.dogo_rocket').removeClass('dogo_rocket_active');
        }
        // if ($(window).scrollTop() > 800) {
        //     $('.rocket_lamp-1').addClass('rocket_lamp-1_active');
        //     $('.rocket_lamp-2').addClass('rocket_lamp-2_active');
        //     $('.rocket_lamp-3').addClass('rocket_lamp-3_active');
        //     $('.rocket_lamp-4').addClass('rocket_lamp-4_active');
        //     $('.rocket_lamp-5').addClass('rocket_lamp-5_active');
        // } else {
        //     $('.rocket_lamp-1').removeClass('rocket_lamp-1_active');
        //     $('.rocket_lamp-2').removeClass('rocket_lamp-2_active');
        //     $('.rocket_lamp-3').removeClass('rocket_lamp-3_active');
        //     $('.rocket_lamp-4').removeClass('rocket_lamp-4_active');
        //     $('.rocket_lamp-5').removeClass('rocket_lamp-5_active');
        // }
        if($(window).scrollTop() > 2000 && $(window).scrollTop() < 2800){
            $('.bounty_campain').removeClass('bounty_campain_active');
        } 
    });
    //crypto list reveal
    $('#crypto_btn').click((e) => {
        $(e.currentTarget).addClass('crypto_btn_active');
        $('.cryprto_list').addClass('cryprto_list_active');
        $('.coin_1').addClass('coin_1_active');
        $('.coin_2').addClass('coin_2_active');
        $('.coin_3').addClass('coin_3_active');
        $('.coin_4').addClass('coin_4_active');
        $('.coin_5').addClass('coin_5_active');
    })
})
