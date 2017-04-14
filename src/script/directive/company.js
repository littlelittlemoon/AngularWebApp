/**
 * Created by 11651 on 2017/4/14.
 */
'use strict'
angular.module('app').directive('appCompany', [function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/company.html'
    }
}])