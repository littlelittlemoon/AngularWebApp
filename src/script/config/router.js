/**
 * Created by 11651 on 2017/4/1.
 */
'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'view/main.html',
        controller: 'mainCtrl'
    }).state('position', {
        url: "/position/:id",
        templateUrl: 'view/position.html',
        controller: 'positionCtrl'
    });
    $urlRouterProvider.otherwise('main');
}])