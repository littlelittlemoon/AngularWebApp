/**
 * Created by 11651 on 2017/4/1.
 */
'use strict'

angular.module('app').controller('mainCtrl', ['$scope', function($scope){
    $scope.list= [{
        id: '1',
        name: '销售',
        companyName: '千度',
        city: '上海',
        industry: '互联网',
        time: '2017-02-03 09:13',
        imgSrc: 'image/company-3.png'
    },{
        id: '2',
        name: '前端开发工程师',
        companyName: '慕课网',
        city: '北京',
        industry: '互联网',
        time: '2017-02-08 10:05',
        imgSrc: 'image/company-1.png'
    },{
        id: '3',
        name: 'Java实习生',
        companyName: '六一',
        city: '广州',
        industry: '互联网',
        time: '2016-05-03 09:10',
        imgSrc: 'image/company-2.png'
    }];


}])