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
            this.count = 1;
            this.total = total;
            this.productsList = [];
        };

        vm.Product = function(name,price,count){
            this.name = name;
            this.count = count;
            this.price = price;
        };

        vm.invoice = {
            "name": "name",
            "discount": "discount",
            "total": "",
            "productsList": [{"name":'',"count":1,"price": 0}]
        };

        vm.addProduct = function(product){
            var newProduct = new vm.Product(product.name,product.price,1);
            vm.invoice.productsList.push(newProduct);
        };
        vm.totalSum = function(ind, count){
            var price = vm.invoice.productsList[ind].price;
            console.log(vm.invoice.productsList[ind].price);
            price = price * count;
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