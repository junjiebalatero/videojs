angular.module('myApp', [])
  .controller('VideoController', function($scope) {
    $scope.videoSource = 'https://chocolate-cooperative-herring-689.mypinata.cloud/ipfs/QmeyxsnCUoypsGdUmgYQLi8RvxESP53EVMMmWWL9S9Nnfd';
    
    $scope.changeVideo = function() {
      // Change the video source when the button is clicked
      $scope.videoSource = 'https://chocolate-cooperative-herring-689.mypinata.cloud/ipfs/QmZBYhYMGFTCMJsP1v3DdNdTaRxtFJBwJRTnhcHBJUM2iz';
    };
  });
