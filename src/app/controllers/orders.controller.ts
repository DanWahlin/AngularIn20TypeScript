///<reference path="../../../tools/typings/tsd.d.ts" />
///<reference path="../../../tools/typings/typescriptApp.d.ts" />

module demoApp {

    class OrdersController {

        customerId: number;

        static $inject = ['$routeParams'];
        constructor($routeParams) {
            this.customerId = $routeParams.customerId;
        }
    }

    angular.module('demoApp')
        .controller('demoApp.OrdersController', OrdersController);

}
