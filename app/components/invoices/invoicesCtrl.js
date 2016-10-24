angular.module('MyApp')
    .controller('invoicesCtrl', ['invoicesApi', 'productsApi', 'customerService', 'dataService', invoicesCtrl]);

    function invoicesCtrl(invoicesApi, productsApi, customerService, dataService){
        var vm = this;
        
        vm.invoicesList = [];


        customerService.async().then(function() {
            vm.customerList = customerService.getCustomers();            
        });

        dataService.getData(productsApi)
            .then(function (response) {
                vm.productsList = response.data;
            }, function (error) {
                console.log(error)
        });



        vm.Invoice = function(name,discount,total){
            this.name = name;
            this.discount = discount;
            this.total = total;
            this.productsList = [];
        };



        vm.addInvoice = function(name){
            var newInvoice = new vm.Invoice(name);
            // ,invoice.discont,invoice.total

            console.log(newInvoice);
            vm.invoicesList.push(newInvoice);                

            // $http.post(invoicesApi, newInvoice).success(function(data){                
            //     vm.invoicesList.push(data);                
            // }).error(function(err){
            //     console.log(err);               
            // });
        };
        
        
    };