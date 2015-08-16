module demoApp {

    class OrdersController {

        customerId: number;
        orders: IOrder[];

        static $inject = ['$routeParams', 'demoApp.dataService'];
        constructor($routeParams, dataService: DataService) {
            this.customerId = $routeParams.customerId;

            dataService.getOrder(this.customerId)
              .then((orders: IOrder[]) => {
                 this.orders = orders;
              });
        }
    }

    angular.module('demoApp')
        .controller('demoApp.OrdersController', OrdersController);

}
