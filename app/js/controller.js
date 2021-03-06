// Generated by CoffeeScript 1.8.0
(function() {
  angular.module('judgebooklet.controller', []).controller('IndexCtrl', [
    '$scope', '$translate', function($scope, $translate) {
      $scope.pageNumbers = [0, 1, 2, 3, 4, 5, 6, 7];
      $scope.pageList = ["turn", "layers", "abilities", "shortcuts", "penalties", "jar", "te", "announcements", "gpe", "competitive", "competitive2", "sealed", "2hg", "commander", "reviews", "cheating"];
      $scope.pages = ["turn", "layers", "abilities", "shortcuts", "penalties", "jar", "te", "announcements"];
      $scope.lastDrag = false;
      $scope.language = $translate.use() || "en";
      $scope.languages = ["en", "fr", "fi"];
      $scope.changeLanguage = function() {
        return $translate.use($scope.language);
      };
      $scope.pageDrop = function(data, page) {
        if ($scope.lastDrag !== false) {
          $scope.pages[$scope.lastDrag] = $scope.pages[page];
          $scope.lastDrag = false;
        }
        return $scope.pages[page] = data;
      };
      $scope.pageDrag = function(data, page) {
        $scope.pages[page] = "";
        return $scope.lastDrag = page;
      };
      return $scope.pageRemove = function(page) {
        return $scope.pages[page] = "";
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=controller.js.map
