var myApp = angular.module('myAngularApp', []);

myApp.controller('myCtrl', ['$scope', function($scope){
   $scope.numArray = [1, 2, 3, 4];
   $scope.parentFunc = function(){
    console.log("in parentFunc");
   }
}]);


myApp.filter('nth', function(){
  return function(input){
    switch(input){
      case 0:
        return input + 'th'
        break;
      case 1:
        return input + 'st'
        break;
      case 2:
        return input + 'nd'
        break;
      case 3:
        return input + 'rd'
        break;
      default:
        return input + 'th'
        break;
    }
  }
});

myApp.directive('submitBtn', function(){
  return {
    restrict: 'AE',
    replace: true,
    //template: '<button>Submit</button>'
    templateUrl: 'templates/submitBtn.html',
    scope: {
      refObj: '=',
      refFunc: '&',
      text: '@'
    },
    controller: ['$scope', function($scope){
      $scope.when = "NOW";
      $scope.newText = $scope.text.toUpperCase();
      $scope.refFunc();
    }]
  }
});

myApp.directive('contactForm', function(){
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'templates/contactform.html',
    controller: ['$scope', function($scope){
      $scope.clicked = function(){
        console.log("clicked submit");
        
      }
    }]
  }
});

// myApp.directive('mathProblem', function(){
//   return {
//     restrict: '',
//     replace: true,
//     templateUrl: 'templates/mathproblem.html',
//     controller: ['$scope', function($scope){
//       $scope.clicked2 = function(){
//         console.log("success!");
//       }
//     }]
//   }
// })