///<reference path="../../../tools/typings/tsd.d.ts" />
///<reference path="../../../tools/typings/typescriptApp.d.ts" />

module demoApp {
    'use strict';

    class CustomersController {
        customers = null;

        static $inject = ['demoApp.customersService'];
        constructor(customersFactory) {
            customersFactory.getCustomers()
              .success((custs) => {
                 this.customers = custs;
              });
        }
    }

    angular.module('demoApp')
           .controller('demoApp.CustomersController', CustomersController);

}
