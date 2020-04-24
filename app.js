(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope) {
  $scope.inputData="";
  $scope.check=function (data) {
    var msg="";
    if(data==""){
      msg="Please enter data first";
    }
    else if(data.split(",").length<=3){
      msg="Enjoy!";
    }
    else if (data.split(",").length>3) {
      msg="Too much!";
    }

    $scope.decission=function () {
      return msg;
    }
  }
}

})();
