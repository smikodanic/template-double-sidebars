/*global angular*/
var clientApp = angular.module('clientApp', []);

clientApp.controller('sidebarsCtrl', function ($scope, $window) {
    'use strict';



    $scope.sideBar1 = 'active1'; //default, when page is loaded
    $scope.sidebar2push = 'pushed'; //default, when page is loaded
    $scope.toggleSidebar_1 = function () {
        //flip flop
        if ($scope.sideBar1 === 'active1') {
            $scope.sideBar1 = '';
            $scope.sidebar2push = '';
        } else {
            $scope.sideBar1 = 'active1';
            $scope.sidebar2push = 'pushed';
        }
        // console.log('sideBar1: ', $scope.sideBar1);
    };


    $scope.sideBar2 = ''; //default, when page is loaded
    $scope.toggleSidebar_2 = function () {
        //flip flop
        if ($scope.sideBar2 === 'active2') {
            $scope.sideBar2 = '';
        } else {
            $scope.sideBar2 = 'active2';
        }
        // console.log('sideBar2: ', $scope.sideBar2);
    };




    /*** responsive views ***/
    var adjustView = function (w) {
        // console.log(w);
        if (w < 768) {
            $scope.sideBar1 = '';
            $scope.sideBar2 = '';
            $scope.sidebar2push = '';

            if (w < 480) {
                $scope.pageSidebars = {'margin-left': '-100px'};
                $scope.pageContent = {'margin-left': '0px'};
                $scope.sidebarsButton = {position: 'relative', left: '110px', top: '10px'};
            } else {
                $scope.pageSidebars = {};
                $scope.pageContent = {};
                $scope.sidebarsButton = {visibility: 'hidden'};
            }

        } else {
            $scope.sideBar1 = 'active1';
            $scope.sideBar2 = '';
            $scope.sidebar2push = 'pushed';
        }

        // $scope.$apply();
    };

    //on page load
    adjustView($window.innerWidth);

    //on page resizing
    angular.element($window).bind('resize', function () {
        var w = $window.innerWidth;
        adjustView(w);
        $scope.$apply();
    });

    //show/hide both sidebars
    $scope.toggleSidebars = function () {
        $scope.sidebarsVisible = !$scope.sidebarsVisible;

        if ($scope.sidebarsVisible) {
            $scope.pageSidebars = {};
            $scope.pageContent = {};
        } else {
            $scope.pageSidebars = {'margin-left': '-100px'};
            $scope.pageContent = {'margin-left': '0px'};
        }

    };




});
