var appStart = function () {


   // handleMainSlider  ==============
   var handleMainSlider = function () {
      if (document.querySelector('.banner-slider')) {
         var swiper = new Swiper(".banner-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 5000,
            autoplay: {
               delay: 0,
               disableOnInteraction: true,
               waitForTransition: false,
            }
         });
      }
   }

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