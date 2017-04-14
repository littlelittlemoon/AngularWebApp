/**
 * Created by 11651 on 2017/4/13.
 */
'use strict'
angular.module('app').directive('appFoot', [function(){
    return {
        restrict: 'A',
        replace: true,
        templateUrl: '.././view/template/foot.html'
    };
}]);