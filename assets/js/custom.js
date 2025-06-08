var appStart = function () {


   // handleMainSlider  ==============
   var handleMainSlider = function () {
      if (document.querySelector('.banner-slider')) {
         // HERO SLIDER
         var menu = [];
         document.querySelectorAll('.swiper-slide').forEach(function (slide) {
            var text = slide.querySelector('.slide-inner')?.getAttribute("data-text");
            menu.push(text);
         });

         var interleaveOffset = 0.5;
         var swiperOptions = {
            loop: true,
            speed: 1500,
            parallax: true,
            autoplay: {
               delay: 6500,
               disableOnInteraction: false,
            },
            watchSlidesProgress: true,
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
            },
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
            on: {
               progress: function () {
                  var swiper = this;
                  for (var i = 0; i < swiper.slides.length; i++) {
                     var slideProgress = swiper.slides[i].progress;
                     var innerOffset = swiper.width * interleaveOffset;
                     var innerTranslate = slideProgress * innerOffset;
                     var inner = swiper.slides[i].querySelector(".slide-inner");
                     if (inner) {
                        inner.style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
                     }
                  }
               },
               touchStart: function () {
                  var swiper = this;
                  for (var i = 0; i < swiper.slides.length; i++) {
                     swiper.slides[i].style.transition = "";
                  }
               },
               setTransition: function (speed) {
                  var swiper = this;
                  for (var i = 0; i < swiper.slides.length; i++) {
                     swiper.slides[i].style.transition = speed + "ms";
                     var inner = swiper.slides[i].querySelector(".slide-inner");
                     if (inner) {
                        inner.style.transition = speed + "ms";
                     }
                  }
               }
            }
         };
         var swiper = new Swiper(".banner-slider", swiperOptions);
         // DATA BACKGROUND IMAGE
         var sliderBgSetting = document.querySelectorAll(".slide-bg-image");
         sliderBgSetting.forEach(function (el) {
            var bg = el.getAttribute("data-background");
            if (bg) {
               el.style.backgroundImage = "url(" + bg + ")";
            }
         });
      }
   };


   /* Function ============ */
   return {
      init: function () {
         handleMainSlider();
      },

      load: function () {

      },

      resize: function () {

      },
      scroll: function () {

      }
   }
}();


/* Document.ready Start */
document.addEventListener('DOMContentLoaded', function () {
   appStart.init();

});
/* Document.ready END */

/* Window Load START */
window.addEventListener('load', function () {
   appStart.load();

});
/* Window Load END */

/* Window Resize START */
window.addEventListener('resize', function () {
   appStart.resize();
});
/*  Window Resize END */

/* Window Scroll START */
window.addEventListener("scroll", function () {
   appStart.scroll();
});
/*  Window Scroll END */


