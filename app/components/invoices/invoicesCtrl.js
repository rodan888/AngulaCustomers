angular.module('MyApp')
    .controller('invoicesCtrl', ['invoicesApi', 'customersApi', 'productsApi', 'customerService', 'dataService', invoicesCtrl]);

    function invoicesCtrl(invoicesApi, customersApi, productsApi, customerService, dataService){
        var vm = this;

        dataService.getData(productsApi)
            .then(function (response) {
                vm.productsList = response.data;
            }, function (error) {
                console.log(error)
        });

        dataService.getData(customersApi)
            .then(function (response) {
                vm.customerList = response.data;
            }, function (error) {
                console.log(error)
        });


        // customerService.async().then(function() {
        //     vm.customerList = customerService.getCustomers();            
        // });

        // vm.Invoice = function(name,discount,total){
        //     this.name = name;
        //     this.discount = discount;            
        //     this.total = total;
        //     this.productsList = [];
        // };
        vm.invoice = {
            "name": "name",
            "discount": 0,
            "total": "",
            "productsList": []
        };

        vm.Product = function(name,price,count){
            this.name = name;
            this.count = count;
            this.price = price;
        };

        vm.addProduct = function(product){
            var newProduct = new vm.Product(product.name,product.price,1);
            vm.invoice.productsList.push(newProduct);
        };        

        vm.totalSum = function(discont){
          var result = 0,              
              productL = vm.invoice.productsList.length;

          for(var i = 0; i<productL; i++){
            var count = vm.invoice.productsList[i].count,
                price = vm.invoice.productsList[i].price;

            result += count*price;
          };

          vm.invoice.discount = discont;        
          vm.invoice.total = (result * discont / 100);

          return result - (result * discont / 100).toFixed(2);
        };


        // vm.addInvoice = function(customer){
        //     vm.invoice = new vm.Invoice(customer.name,0,vm.totalSum());

        //     console.log(vm.invoice);

            // $http.post(invoicesApi, newInvoice).success(function(data){                
            //     vm.invoicesList.push(data);                
            // }).error(function(err){
            //     console.log(err);               
            // });
        // };                
    };