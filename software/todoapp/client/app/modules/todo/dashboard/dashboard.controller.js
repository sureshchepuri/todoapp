'use strict';
(function(){
    angular.module('todoapp.dashboard', ['ngRoute'])
        .controller('DashboardCtrl', dashboardController);
    dashboardController.$inject = ['dashboardService'];
    function dashboardController(dashboardService) {
        var dc = this;
        dc.topics = [];
        onLoad();
        function onLoad() {
            console.log('======assigning the topics============')
            var getTopics = dashboardService.getTopics({}).then(function (response) {
                console.log('======assigning it topics============')
                dc.topics = response.data;
            });
        }
    }
}());