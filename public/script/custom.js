/** Custom JS **/

(function () {
    'use strict';

    $(document).ready(function() {

        var swiper = new Swiper('.swiper-container', {
            //enable hash navigation
            hashnav: true,

            direction: 'horizontal',
            loop: true,

            //autoplay: 5000,
            //speed: 1400,
            //spaceBetween: 200,

            // Navigation arrows
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        });

    });



}());
