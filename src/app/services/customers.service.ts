///<reference path="../../../tools/typings/tsd.d.ts" />
///<reference path="../../../tools/typings/typescriptApp.d.ts" />

module demoApp {

    class CustomersService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getCustomers() {
            return this.$http.get('customers.json');
        }
    }

    angular.module('demoApp')
        .service('demoApp.customersService', CustomersService);

}
