/** Main module of the application. **/

(function () {

    'use strict';

    angular
        .module('app', [
            'ui.router',
            'bhResponsiveImages',
            'ksSwiper'
        ])

        .config([
            '$urlRouterProvider',
            '$stateProvider',

        function(
            $urlRouterProvider,
            $stateProvider) {

                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('main', {
                        url: "/",
                        templateUrl: "app/views/main.html"
                    })

                    .state('other', {
                        url: "/other",
                        templateUrl: "app/views/other.html"
                    })

        }])


}());
