'use strict';
(function(){
    angular.module('todoapp.dashboard', ['ngRoute'])
        .controller('DashboardCtrl', dashboardController);
    dashboardController.$inject = ['dashboardService'];
    function dashboardController(dashboardService) {
        var dc = this;
        dc.tasks = [];
        onLoad();
        function onLoad() {
            console.log('======assigning the tasks============')
            var getTasks = dashboardService.getTaks({}).then(function (response) {
                console.log('======assigning it tasks============')
                dc.tasks = response.data;
            });
        }
    }
}());