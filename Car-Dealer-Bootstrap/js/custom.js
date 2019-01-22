/*

Template: Car Dealer - The Best Car Dealer Automotive Responsive HTML5 Template
Author: potenzaglobalsolutions.com
Design and Developed by: potenzaglobalsolutions.com

*/



/*================================================
[  Table of contents  ]
================================================

:: Predefined Variables
:: Preloader
:: Mega menu
:: Search Bar
:: Owl carousel
:: Counter
:: Slider range
:: Countdown
:: Tabs
:: Accordion
:: List group item
:: Slick slider 
:: Mgnific Popup
:: PHP contact form 
:: Placeholder
:: Isotope
:: Scroll to Top
:: POTENZA Window load and functions

======================================
[ End table content ]
======================================*/
 
//POTENZA var
var POTENZA = {};
 
 (function($){
  "use strict";

/*************************
      Predefined Variables
*************************/ 
   var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $countdownTimer = $('.countdown'),
        $counter = $('.counter');

    //Check if function exists
     $.fn.exists = function () {
        return this.length > 0;
    };

/*************************
        Preloader
*************************/  
  POTENZA.preloader = function () {
       $("#load").fadeOut();
       $('#loading').delay(0).fadeOut('slow');
   };

/*************************
       Mega menu
*************************/    
 POTENZA.megaMenu = function () {
    $('#menu').megaMenu({
           // DESKTOP MODE SETTINGS
          logo_align          : 'left',         // align the logo left or right. options (left) or (right)
          links_align         : 'left',        // align the links left or right. options (left) or (right)
          socialBar_align     : 'left',    // align the socialBar left or right. options (left) or (right)
          searchBar_align     : 'right',   // align the search bar left or right. options (left) or (right)
          trigger             : 'hover',           // show drop down using click or hover. options (hover) or (click)
          effect              : 'fade',             // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
          effect_speed        : 400,          // drop down show speed in milliseconds
          sibling             : true,              // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
          outside_click_close : true,  // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
          top_fixed           : false,           // fixed the menu top of the screen. options (true) or (false)
          sticky_header       : true,       // menu fixed on top when scroll down down. options (true) or (false)
          sticky_header_height: 250,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
          menu_position       : 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
          full_width          : false,           // make menu full width. options (true) or (false)
         // MOBILE MODE SETTINGS
          mobile_settings     : {
            collapse            : true,    // collapse the menu on click. options (true) or (false)
            sibling             : true,      // hide the others showing drop downs when click on current drop down. options (true) or (false)
            scrollBar           : true,    // enable the scroll bar. options (true) or (false)
            scrollBar_height    : 400,  // scroll bar height in px value. this option works if the scrollBar option true.
            top_fixed           : false,       // fixed menu top of the screen. options (true) or (false)
            sticky_header       : false,   // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 200   // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
         }
       });
 }

/*************************
       Search Bar 
*************************/
 POTENZA.searchbar = function () {
      if ($(".search-top").exists()) {
         $('.search-btn').on("click", function () {
             $('.search-top').toggleClass("search-top-open");
               return false;
              });
                $("html, body").on('click', function (e) {
                 if (!$(e.target).hasClass("not-click")) {
                }
             });
      }
 }
 
/*************************
      Owl carousel 
*************************/
 POTENZA.carousel = function () {
     if ($(".owl-carousel-1").exists()) {
         $('.owl-carousel-1').owlCarousel({
               items:4,
                responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:2
                  },
                  1000:{
                      items:4
                  }
              },
               margin:15,
               loop:true,
               autoplay:true,
               autoplayTimeout:2000,
               smartSpeed:1000,
               autoplayHoverPause:true,
               dots:false,
               nav:true,
               navText:[
                      "<i class='fa fa-angle-left fa-2x'></i>",
                      "<i class='fa fa-angle-right fa-2x'></i>"
                  ]
           });
      }

      if ($(".owl-carousel-2").exists()) {
          $('.owl-carousel-2').owlCarousel({
                 items:3,
                  responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                },
                 margin:15,
                 loop:true,
                 autoplay:true,
                 autoplayTimeout:2000,
                 smartSpeed:1000,
                 autoplayHoverPause:true,
                 dots:true,
                 nav:false
          });
      }
      if ($(".owl-carousel-3").exists()) {   
          $('.owl-carousel-3').owlCarousel({
                 items:1,
                 margin:30,
                 loop:true,
                 autoplay:false,
                 autoplayTimeout:1500,
                 smartSpeed:1000,
                 transitionStyle : true,
                 autoplayHoverPause:true,
                 dots:true,
                 nav:false
          });
      }
      if ($(".owl-carousel-4").exists()) {    
          $('.owl-carousel-4').owlCarousel({
                 items:3,
                  responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                },
                 margin:15,
                 loop:true,
                 autoplay:true,
                 autoplayTimeout:2000,
                 smartSpeed:1000,
                 autoplayHoverPause:true,
                 dots:false,
                 nav:true,
                 navText:[
                        "<i class='fa fa-angle-left fa-2x'></i>",
                        "<i class='fa fa-angle-right fa-2x'></i>"
                    ]
          });
      }
      if ($(".owl-carousel-5").exists()) {   
          $('.owl-carousel-5').owlCarousel({
                   items:1,
                   margin:0,
                   loop:true,
                   autoplay:true,
                   autoplayTimeout:1500,
                   smartSpeed:1000,
                   autoplayHoverPause:true,
                   dots:false,
                   nav:true,
                   navText:[
                          "<i class='fa fa-angle-left fa-2x'></i>",
                          "<i class='fa fa-angle-right fa-2x'></i>"
                      ]
          }); 
      }
      if ($(".owl-carousel-6").exists()) {  
          $('.owl-carousel-6').owlCarousel({
                   items:5,
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
                  },
                   margin:0,
                   loop:true,
                   autoplay:true,
                   autoplayTimeout:2000,
                   smartSpeed:1000,
                   autoplayHoverPause:true,
                   dots:false,
                   nav:false
          });
      }
}

/*************************
       Counter
*************************/  
  POTENZA.counters = function () {
          if ($counter.exists()) {
              $counter.each(function () {
                  var $elem = $(this);                 
                      $elem.appear(function () {
                          $elem.find('.timer').countTo();
                      });                  
              });
          }
  };

/*************************
      Slider range
*************************/
  POTENZA.priceslider = function () {
   if($(".price-slide,.price-slide-2").exists()) {
        $("#slider-range,#slider-range-2").slider({
            range: true,
            min: 0,
            max: 500,
            values: [50, 300],
            slide: function(event, ui) {
                var min = ui.values[0],
                    max = ui.values[1];
                  $('#' + this.id).prev().val("$" + min + " - $" + max);
            }
        });
    }
  }

/*************************
         Countdown
*************************/
  POTENZA.countdownTimer = function () {
      if ($countdownTimer.exists()) {
            $countdownTimer.downCount({
                date: '10/05/2019 12:00:00',
                offset: 400
            });
      }
  };

/*************************
          Tabs
*************************/
 POTENZA.tabs = function () {
       var $tabsdata = $("#tabs li[data-tabs]"),
           $tabscontent = $(".tabcontent"),
           $tabsnav = $(".tabs li");       

      $tabsdata.on('click', function () {
        $tabsdata.removeClass('active');
        $tabscontent.hide();
        var tab = $(this).data('tabs');
        $(this).addClass('active');
        $('#' + tab).fadeIn().show();
      });

      $tabsnav.on('click', function () {
          var  cur = $tabsnav.index(this);
          var elm = $('.tabcontent:eq('+cur+')');
          elm.addClass("pulse");
          setTimeout(function() {
                elm.removeClass("pulse");
          }, 220);
      });
      $tabscontent.hide().filter(':first').show();
   }

/*************************
      Accordion
*************************/
  POTENZA.accordion = function () {
     var   $acpanel = $(".accordion > .accordion-content"),
           $acsnav = $(".accordion > .accordion-title > a");      
         
          $acpanel.hide().first().slideDown("easeOutExpo");
          $acsnav.first().addClass("active");
          $acsnav.on('click', function () {
              var $this = $(this).parent().next(".accordion-content");
              $acsnav.removeClass("active");
              $(this).addClass("active");
              $acpanel.not($this).slideUp("easeInExpo");
              $(this).parent().next().slideDown("easeOutExpo");
              return false;
        });
  }

 /*************************
      List group item
 *************************/   
  POTENZA.featurelist = function () {
      var $featurenav = $(".list-group-item a");
          $featurenav.on('click', function () {
           if(!($(this).hasClass("current"))){
               $featurenav.removeClass("current").next("ul").slideUp(); 
             }
             $(this).toggleClass("current");
             $(this).next("ul").slideToggle("slow");
             return false;
        });
    }
 
 /*************************
      Slick slider  
*************************/
  POTENZA.slickslider = function () {
      if ($(".slider-slick").exists()) {
          $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.slider-nav'
          });
        $('.slider-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: false,
          centerMode: true,
          focusOnSelect: true
        });
      }
  }

/*************************
       Magnific Popup
*************************/ 
  POTENZA.mediaPopups = function () {
    if ($(".popup-gallery").exists()) {
          $('.popup-gallery').magnificPopup({
              delegate: 'a.popup-img',
              type: 'image',
              tLoading: 'Loading image #%curr%...',
              mainClass: 'mfp-img-mobile',
              gallery: {
                  enabled: true,
                  navigateByImgClick: true,
                  preload: [0,1] // Will preload 0 - before current, and 1 after the current image
              },
              image: {
                  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                  titleSrc: function(item) {
                      return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                  }
             }
         }); 
      }
      if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
           $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
          });
      }
  }

 /*************************
     PHP contact form 
*************************/
  POTENZA.contactform = function () {
      $( "#contactform" ).submit(function( event ) {
          $("#ajaxloader").show();
          $("#contactform").hide();
          $.ajax({
            url:'php/contact-form.php',
            data:$(this).serialize(),
            type:'post',
            success:function(response){
              $("#ajaxloader").hide();
              $("#contactform").show();
              
              $("#formmessage").html(response).show().delay(2000).fadeOut('slow');
            }
          });
          event.preventDefault();
        });
    }

/*************************
        Placeholder
 *************************/ 
  POTENZA.placeholder = function () {   
       var $placeholder = $('[placeholder]');
           $placeholder.focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
              input.val('');
              input.removeClass('placeholder');
            }
          }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
              input.addClass('placeholder');
              input.val(input.attr('placeholder'));
            }
          }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
              var input = $(this);
              if (input.val() == input.attr('placeholder')) {
                input.val('');
              }
          })
      });
  }

/*************************
         Isotope
*************************/
 POTENZA.Isotope = function () {
      var $isotope = $(".isotope"),
          $itemElement = '.grid-item',
          $filters = $('.isotope-filters');      
        if ($isotope.exists()) {
            $isotope.isotope({
            resizable: true,
            itemSelector: $itemElement,
              masonry: {
                gutterWidth: 10
              }
            });     
       $filters.on( 'click', 'button', function() {
         var $val = $(this).attr('data-filter');
             $isotope.isotope({ filter: $val });       
             $filters.find('.active').removeClass('active');
             $(this).addClass('active');
      });     
    }
 }

 // masonry
  POTENZA.masonry = function () {
        var $masonry = $('.masonry-main .masonry'),
            $itemElement = '.masonry-main .masonry-item'; 
            if ($masonry.exists()) {
              $masonry.isotope({
                resizable: true,
                itemSelector: $itemElement,
                masonry: {
                  gutterWidth: 10
                }
              });
         }  
  }
  
/*************************
      Scroll to Top
*************************/
  POTENZA.scrolltotop = function () {  
      var $scrolltop = $('.car-top');

      $scrolltop.on('click', function () {
          $('html,body').animate({
                    scrollTop: 0
             }, 800);
          $(this).addClass("car-run");
          setTimeout(function(){ $scrolltop.removeClass('car-run');},1000);
          return false;
      });
      $window.on('scroll', function () {   
          if($window.scrollTop() >= 200) {
              $scrolltop.addClass("show");
              $scrolltop.addClass("car-down");
             } else {
               $scrolltop.removeClass("show");
               setTimeout(function(){ $scrolltop.removeClass('car-down');},300);
            }
       });
  }


/****************************************************
     POTENZA Window load and functions
****************************************************/

  //Window load functions
    $window.load(function () {
          POTENZA.preloader(),
          POTENZA.Isotope(),
          POTENZA.masonry();
    });
  //Document ready functions
    $document.ready(function () {
        POTENZA.megaMenu(),
        POTENZA.searchbar(),
        POTENZA.counters(),
        POTENZA.carousel(),
        POTENZA.priceslider(),
        POTENZA.tabs(),
        POTENZA.accordion(),
        POTENZA.featurelist(),
        POTENZA.slickslider(),
        POTENZA.mediaPopups(),
        POTENZA.contactform(),
        POTENZA.placeholder(),
        POTENZA.scrolltotop(),
        POTENZA.countdownTimer();
    });

})(jQuery);