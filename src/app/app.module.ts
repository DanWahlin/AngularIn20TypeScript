((): void => {

    var app = angular.module('demoApp', ['ngRoute', 'ngAnimate']);

    app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/',
        {
            controller: 'demoApp.CustomersController',
            templateUrl: 'app/views/customers.html',
            controllerAs: 'vm'
        })
        .when('/orders/:customerId',
        {
            controller: 'demoApp.OrdersController',
            templateUrl: 'app/views/orders.html',
            controllerAs: 'vm'
        });
    }]);

})();
