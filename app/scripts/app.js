'use strict';

/**
 * @ngdoc overview
 * @name moneybaby
 * @description
 * # moneybaby
 *
 * Main module of the application.
 */
angular.module('app', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase',
        'firebase.ref',
        'firebase.auth',
        'pascalprecht.translate',
        'LocalStorageModule'
    ])
    .constant('LANG_DEFAULT', window.navigator.userLanguage || window.navigator.language);
