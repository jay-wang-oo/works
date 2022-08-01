var $window = $(window);
var windowHeight = $window.height();
var windowWidth = $window.width();
var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
var pos = $window.scrollTop();
var viewPortWidthHeight = function() {
    var wh = {};

    if (window.innerWidth) {
        wh.width = window.innerWidth;
        wh.height = window.innerHeight;
    } else if (document.documentElement.clientWidth) {
        wh.width = document.documentElement.clientWidth;
        wh.height = document.documentElement.clientHeight;
    } else if (document.body.clientWidth) {
        wh.width = document.body.clientWidth;
        wh.height = document.body.clientHeight;
    }
    return wh;
}




$(document).ready(function() {
    $('.item_menu_Box').map(function() {
        if (this.offsetWidth < this.scrollWidth) {
            $('.item_Menu').addClass('open_flexslider');

        }
    });

    /*縮圖*/
    $("#Wrapper").each(function() {
        $(".writer_box .writer_photo,.main_event_img,.in_clinic_img,.doctor_img,.new_banner_img,.news_tag_photo,.main_video_photo,.topic_list_box .topic_img,.main_news_img").imgLiquid();
    });
    /* ==========================================================================
                  * 熱門診所
      ==========================================================================*/
    $('.in_qutpatient_banner .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.in_qutpatient_banner .slider-nav'
    });

    $('.in_qutpatient_banner .slider-nav').slick({
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.in_qutpatient_banner .slider-for',
        dots: false,
        autoplay: true,
        autoplaySpeed: 3500,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    //頁籤
    $('.in_qutpatient_tag li').on('click', function() {
        var $_this = $(this).index();
        $('.in_qutpatient_tag li,.in_qutpatient_container').removeClass('active');
        $('.in_qutpatient_tag li:eq(' + $_this + '),.in_qutpatient_container:eq(' + $_this + ')').addClass('active');
    });


    /* ==========================================================================
                  * 首頁 最新消息輪播
      ==========================================================================*/
    $('.news_box').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        //vertical: true,
        pauseOnHover: false,
    });

    $('.in_blog_list').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        //vertical: true,
        pauseOnHover: false,
    });

    $('.us_slider .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.us_slider .slider-nav'
    });

    $('.us_slider .slider-nav').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        asNavFor: '.us_slider .slider-for',
        autoplay: true,
        autoplaySpeed: 3500,

    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

    $('.as_clinic_slider ul').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        //vertical: true,
        pauseOnHover: false,
    });

    $('.event_banner').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'ease',
        //vertical: true,
        pauseOnHover: false,
    });

    $('.main_news_detailPage .health_box ul,.main_newsPage .health_box ul,.main_eventPage .health_box ul,.main_videoPage .health_box ul,.shared_Page .health_box ul').slick({
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,

        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    $('.indexPage .health_box ul').slick({
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,

        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
    /* ==========================================================================
                  * 選單
      ==========================================================================*/
    //desk
    $('nav .subheader').on('mouseenter ', function() {
        if (windowWidth > 480) {
            if (!$(this).find('a').hasClass('on')) {
                $('.nav_item1>li a.on').next('.submenu').stop().slideUp(200, 'easeInOutSine', function() { $(this).removeAttr('style'); });
                $('.nav_item1>li a.on').removeClass('on');
            }
            $(this).find('a').addClass('on');
            $(this).find('.submenu').slideDown(400, 'easeInOutSine');
        }
    });
    $('nav .subheader').on('mouseleave', function() {
        if (windowWidth > 480) {
            $('nav>ul li>a.on').next('.submenu').stop().slideUp(200, 'easeInOutSine', function() { $(this).removeAttr('style'); });
            $('nav>ul li>a.on').removeClass('on');
        }
    });
    //第三層
    $('.nav_item1 .subheader .submenu li').on('mouseenter', function() {
        if (windowWidth > 480) {
            $(this).find('.subitem').stop().slideDown(400, 'easeInOutSine');
        }
    });
    $('.nav_item1 .subheader .submenu li').on('mouseleave', function() {
        if (windowWidth > 480) {
            $(this).find('.subitem').stop().slideUp(50, 'easeInOutSine');
        }
    });

    //手機板點下後
    $('.subheader>a').on('click', function(e) {
        if (windowWidth <= 480) {
            if (!$(this).hasClass('on')) {

                $('.subheader>a').removeClass('on');
                $(this).addClass('on');

                $('.submenu').stop().slideUp(200);
                $('nav li a.on').next('.submenu').stop().slideDown(200);
            } else {
                $(this).removeClass('on');
                $('.submenu').stop().slideUp(200);
            }

        }
    });

    function innt_function() {
        $("html,body").css({ 'overflow': '' })
        $('.hamburger-menu').removeClass('animate');
        $('header').removeClass('on');
        $('.subheader>a').removeClass('on');
        $('.nav_menu .submenu li').removeClass('open');
        $('.nav_menu .submenu').removeAttr('style');
    }

    //手機選單展開
    $('.menu-wrapper').on('click', function(e) {
        if (!$('.hamburger-menu').hasClass('animate')) {
            $('.hamburger-menu').addClass('animate');
            $('header').addClass('on');
            $('.menu_pc,.topic_nav').stop().slideDown();
            $("html,body").css({ 'overflow': 'hidden' });
        } else {
            innt_function();
            $('.menu_pc,.topic_nav').stop().slideUp(function() { $(this).removeAttr('style'); });
        }
        return false;
    });


    // $('.submenu>ul>li').on('click', function(event) {
    //     event.stopPropagation();
    //     if (!$(this).hasClass('open')) {
    //         $('.nav_menu .submenu li').removeClass('open');
    //         $(this).addClass('open');

    //         $('.submenu>ul>li ul').stop().slideUp(200);
    //         $(this).children('ul').stop().slideDown(200);
    //     }else{
    //          $('.submenu>ul>li ul').removeClass('open');
    //          $(this).children('ul').stop().slideUp(200);
    //     }
    // });

    $('.mo_close').on('click', function() {
        innt_function();
        $('.menu_pc,.topic_nav').stop().slideUp(0, function() { $(this).removeAttr('style'); });
    });
    /* ==========================================================================
                  * Top
      ==========================================================================*/
      $(function(){
        $('#BackTop').click(function(){ 
            $('html,body').animate({scrollTop:0}, 333);
        });
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 200 ){
                $('#BackTop').fadeIn(222);
            } else {
                $('#BackTop').stop().fadeOut(222);
            }
        }).scroll();
    });

    // $(".top_btn").click(function() {
    //     $('header').removeClass();
    //     $("html,body").animate({ scrollTop: 0 }, 1000);

    //     return false;
    // });

    // $window.bind('scroll', function() {
    //     pos = $window.scrollTop();
    //     windowWidth = $window.width();
    //     var scrollTop = $(this).scrollTop();
    //     var top = $('.top_btn');
    //     var mainHegiht = $('main');
    //     var logoBox = $('.head_top').height();
    //     var topicArrw = $('.topic_arrw');

    //     if (scrollTop >= 24) {
    //         $('header').addClass('fix_bg');
    //     } else if (scrollTop == 0) {
    //         $('header').removeClass('fix_bg');
    //     }

    //     if (scrollTop >= 100) {
    //         top.addClass('active');

    //     } else {
    //         top.removeClass('active');
    //         topicArrw.addClass('active');
    //     }
    //     if (scrollTop >= 200) {
    //         topicArrw.addClass('active');
           

    //     } else if(scrollTop === 0) {

    //         topicArrw.removeClass('active');
    //     }
    // });
    // $(window).on('resize', function() {
    //     if ($(this).width() >= 1085) {
    //         innt_function();
    //         return false;
    //     }
    // });


    /* ==========================================================================
                * news_tag_list
    ==========================================================================*/

    $('.blockchain_item1 .news_tag_list li').on('click', function() {
        var $_this = $(this).index();
        $('.blockchain_item1 .news_tag_list li,.blockchain_item1 .news_tag_content>li').removeClass('active');
        $('.blockchain_item1 .news_tag_list li:eq(' + $_this + '),.blockchain_item1 .news_tag_content>li:eq(' + $_this + ')').addClass('active');
    });


    $('.blockchain_item3 .news_tag_list li').on('click', function() {

        var $_this = $(this).index();

        $('.blockchain_item3 .news_tag_list li,.blockchain_item3 .news_tag_content>li').removeClass('active');
        $('.blockchain_item3 .news_tag_list li:eq(' + $_this + '),.blockchain_item3 .news_tag_content>li:eq(' + $_this + ')').addClass('active');
        $('.blockchain_item3 .news_tag_content>li:eq(' + $_this + ') ul.news_minor li:eq(0)').addClass('active');
        $('.blockchain_item3 .news_tag_content>li:eq(' + $_this + ') ul.left_photo li:eq(0)').addClass('active');
    });

    var life_hover = $('.life_box .news_tag_content li .news_minor li');
    life_hover.on('mouseenter', function() {
        if ($(this).parent().parent().hasClass('active')) {
            var $_this = $(this).index();
            $(this).parent().children('ul.news_minor li').removeClass('active');
            $(this).parent().prev().children('ul.left_photo li').removeClass('active');
            $(this).parent().children('ul.news_minor li:eq(' + $_this + ')').addClass('active');
            $(this).parent().prev().children('ul.left_photo li:eq(' + $_this + ')').addClass('active');
        }
    });

    /* ==========================================================================
                  * 字級大小
      ==========================================================================*/
    function sizeIn() {
        var sizeCont = parseInt($(".detail_content,.editor_Box,.detail_explanation,.detail_foreword").css("fontSize")); // 获取原设定的font-size的值
        if (sizeCont == 30) { // 30 stop
            $(".detail_content,.editor_Box,.detail_explanation,.detail_foreword").css({ fontSize: sizeCont });
        } else {
            $(".detail_content,.editor_Box,.detail_explanation,.detail_foreword").css({ fontSize: sizeCont + 1 });
        }
    }

    function sizeOut() {
        var sizeCont = parseInt($(".detail_content,.editor_Box,.detail_explanation,.detail_foreword").css("fontSize"));
        if (sizeCont == 12) { // 12 stop
            $(".detail_content,.editor_Box,.detail_explanation,.detail_foreword").css({ fontSize: sizeCont });
        } else {
            $(".detail_content,.editor_Box,.detail_explanation,.detail_foreword").css({ fontSize: sizeCont - 1 });
        }
    }

    function sizeDefault() {
        $(".cont").css({ fontSize: "" })
    }

    $(".font_level a").on('click', function() {
        if ($(this).index() == 0) {
            sizeOut();
        } else if ($(this).index() == 1) {
            sizeIn();
        } else {
            sizeDefault();
        }

    })
});