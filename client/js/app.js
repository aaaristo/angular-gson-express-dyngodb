angular.module('angular-gson-express',['angular-gson'])
       .run(function ($http,$rootScope)
       {
           var a= { nome: 'andrea' }, e= { nome: 'elena' };

           e.papa= a;
           a.figlia= e;

           $http.post('/data',a)
                .success(function (a)
                {
                   console.log(a,a.figlia.papa==a);
                   $rootScope.a= a;
                });
       });
