(function ($) {
    "use strict";
    
    
      /*================================
          preloader
==================================*/

    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });


/*================================
          Slicknav
==================================*/
    $('nav ul').slicknav({
        label: '',
        prependTo: ".mobile_menu"
    });


    /*================================
        stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#header');

        if (scroll > 1) {
            mainHeader.addClass("black");
        } else {
            mainHeader.removeClass("black");
        }
    });


    /*================================
            Smooth Scroll
    ==================================*/
    var links = $("nav ul li a[href^='#']");
    var topGap = 70;

    links.on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
        return false;
    });


    /* ===============================
            Active menu item
    =================================== */
    $(window).on("scroll", function () {
        activeMenuItem($("nav"));
    });

    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            home = nav.find(" > ul > li:first");

        sections.each(function () {
            var top = $(this).offset().top - 92,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }
  /*================= social-medi  =====================*/

    $('.social-media ul li').on('mouseenter', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

 
      /*================= Portfolio  =====================*/
   //isotop filtering
    $('.container').imagesLoaded(function () {
        $('.filter-button-group').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        })
    });
    // filtering li active
    $('.filter-btn').on("click", function () {
        if ($(this).hasClass('active-btn')) {
            $(this).removeClass('active-btn');
        } else {
            $(this).addClass('active-btn');
            $(this).siblings().removeClass('active-btn');
        }
    });

    /*================= Lightbox video  =====================*/

    
        //Lightbox video
    $(".lightbox-video").magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });
    
    
        //Lightbox video
  
        // Image gallery
        $(".light-box").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    /*================= Client Area  =====================*/

    var owl = $('.client');
    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 0,
        items: 1,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"]
    });

    /*================= Blog Area  =====================*/
    var owl = $('.blog');
    owl.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        items: 3,
        responsive: {
            0: {
                items: 1,
                loop: true,
                margin: 0,
            },
            900: {
                items: 2,
                loop: true,
            },
            1200: {
                items: 3,
                loop: true,
            },
        }

    });
            
             (function($) {
            new WOW().init();
        })(jQuery); 
    
})(jQuery);
