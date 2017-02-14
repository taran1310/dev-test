app.controller('myController', ['$scope','$http', myController]);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        /*.state('home', {
            url: '/home',
            templateUrl: 'index.html',
            controller: homePageCtrl
        })*/

        .state('main', {
            url: '/main',
            templateUrl: 'loginPage.html',
            controller: myController
        })
        
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
}]);
