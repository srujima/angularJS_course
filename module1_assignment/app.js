angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

    $scope.lunchItems = "";

    $scope.listOfItems = function () {
        var totalLunchboxItems = CalculateItems($scope.lunchItems);
    };

    function CalculateItems(str) {
        var inputString = str.split(',');
        var message;
        if (str === " " || str === "") {
            $scope.message = "Please enter data first";
        }

        else if (inputString.length <= 3) {
            $scope.message = "Enjoy!";
        }
        else if (inputString.length > 3) {
            $scope.message = "Too much!";
        }

    }

};
