(function() {
    angular.module('todoapp')
        .service('dashboardService', dashboardService);
    dashboardService.$inject = ['$q', 'API', '$cookies'];
    function dashboardService($q, API, $cookies) {
        var service = {
            getTaks: getTasks
        }
        return service;
        function getTasks(query) {
            console.log('-------- sending req to get tasks..----------');
            var deferred = $q.defer();
            API.getTasks({q: query}).$promise.then(onComplete).catch(onFailed);
            function onComplete(response) {console.log('-------- got the tasks ----------', response); deferred.resolve(response); }
            function onFailed(err) {console.log('-------- got the tasks ----------',err);deferred.reject(err);}
            return deferred.promise;
        }
    }
}())