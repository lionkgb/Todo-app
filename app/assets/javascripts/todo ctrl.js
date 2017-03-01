// (function() {
//   "use strict"
//   angular.module("app").controller("todoCtrl", function($scope) {
//     $scope.tasks = ["Watch a movie", "Read books", "Wash clothes", "Make body weigth exercises"];

//     $scope.addTask = function(task) {
//       $scope.tasks.push(task);
//       $scope.newTask = null;

//     };

//   window.$scope = $scope;

//   });
// })();

(function(){
  "use strict";
  angular.module("app").controller("todoCtrl", function($scope) {

    $scope.tasks = ["Watch a movie", "Read books", "Wash clothes", "Make body weigth exercises"];
    $scope.addTask = function(task) {
      if (task.length > 0); {
        $scope.tasks.push(task);      
      };
      $scope.newTask = "";
    };  
  window.$scope = $scope;
});
})();