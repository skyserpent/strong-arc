// Copyright StrongLoop 2014
PM.directive('slPmAppController', [
  function() {
    return {
      templateUrl: './scripts/modules/pm/templates/pm.app-controller.html',
      controller: [
        '$scope',
        '$timeout',
        'growl',
        'WorkspaceService',
        function($scope, $timeout, growl, WorkspaceService) {
          $scope.isAppRunning = false;

          function checkAppRunningState() {
            return WorkspaceService.isAppRunning()
              .then(function appRunningResponse(response) {
                if (response.running) {
                  $scope.isAppRunning = true;
                  $timeout(function() {
                    checkAppRunningState();
                  }, CONST.APP_RUNNING_CHECK_INTERVAL);
                }
                else {
                  $scope.isAppRunning = false;
                }
              })
              .catch(function onWorkspaceStartError(error) {
                growl.addWarnMessage("something is wrong check app status");
                $scope.isAppRunning = false;
              });
          }
          checkAppRunningState();

          $scope.startRestartApp = function() {
            WorkspaceService.stopApp()
              .then(function onWorkspaceStop() {
                WorkspaceService.startApp()
                  .then(function onWorkspaceStart() {
                    growl.addSuccessMessage("app is running");
                    $scope.isAppRunning = true;
                    $scope.toggleIsAppRestarted = !$scope.toggleIsAppRestarted;
                    checkAppRunningState();
                  })
                  .catch(function onWorkspaceStartError(error) {
                    growl.addWarnMessage("something is wrong check app status");
                    $scope.isAppRunning = false;
                  });
              })
              .catch(function onWorkspaceStartError(error) {
                WorkspaceService.startApp()
                  .then(function onWorkspaceStart() {
                    growl.addSuccessMessage("app is running");
                    $scope.isAppRunning = true;
                    checkAppRunningState();
                  })
                  .catch(function onWorkspaceStartError(error) {
                    growl.addWarnMessage("something is wrong check app status");
                    $scope.isAppRunning = false;
                  });
              });

          };
          $scope.stopApp = function() {
            WorkspaceService.stopApp()
              .then(function onWorkspaceStop() {
                growl.addSuccessMessage("app is stopped");
                checkAppRunningState();
              })
              .catch(function onWorkspaceStartError(error) {
                growl.addWarnMessage("something is wrong check app status");
                checkAppRunningState();
              });


          };
      }],
      link: function(scope, el, attrs) {

      }
    };
  }
]);
