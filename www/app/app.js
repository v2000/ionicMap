// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('demo', [
  'ionic',
  'ngCordova',
  'ui.ace',

  // modules
  // 'demo.adMob.ctrl',  // not working???
  'demo.camera.ctrl',
  'demo.clipboard.ctrl',
  'demo.contacts.ctrl',
  'demo.device.ctrl',
  'demo.dialogs.ctrl',
  'demo.geolocation.ctrl',
  'demo.globalization.ctrl',
  'demo.network.ctrl',
  'demo.media.ctrl',
  'demo.preferences.ctrl',
  'demo.statusbar.ctrl',
  'demo.touchid.ctrl'
])

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {

      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {

    if (!window.cordova) {
      var appID = 1234567890;
      var version = "v2.0"; // or leave blank and default is v2.0
      $cordovaFacebookProvider.setAppID(appID, version);
    }

    $stateProvider

      .state('menu', {
        url: "/menu",
        templateUrl: "app/menu.html"
      })


      .state('clipboard', {
        url: '/clipboard',
        templateUrl: 'app/clipboard/clipboard.html',
        controller: "ClipboardCtrl"
      })

      .state('datePicker', {
        url: '/datePicker',
        templateUrl: 'app/datePicker/datePicker.html',
        controller: "DatePickerCtrl"
      })

      .state('facebook', {
        url: '/facebook',
        templateUrl: 'app/facebook/facebook.html',
        controller: "FacebookCtrl"
      })


      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/contacts/contacts.html',
        controller: "ContactsCtrl"
      })

      .state('file', {
        url: '/file',
        templateUrl: 'app/file/file.html',
        controller: "FileCtrl"
      })

      .state('googleAnalytics', {
        url: '/googleAnalytics',
        templateUrl: 'app/googleAnalytics/googleAnalytics.html',
        controller: "GoogleAnalyticsCtrl"
      })

      .state('media', {
        url: '/media',
        templateUrl: 'app/media/media.html',
        controller: "MediaCtrl"
      })

      .state('oauth', {
        url: '/oauth',
        templateUrl: 'app/oauth/oauth.html',
        controller: "OauthCtrl"
      })

      .state('batteryStatus', {
        url: '/batteryStatus',
        templateUrl: 'app/batteryStatus/batteryStatus.html',
        controller: "BatteryStatusCtrl"
      })

      .state('statusbar', {
        url: '/statusbar',
        templateUrl: 'app/statusbar/statusbar.html',
        controller: "StatusbarCtrl"
      })

      .state('preferences', {
        url: '/preferences',
        templateUrl: 'app/preferences/preferences.html',
        controller: "PreferencesCtrl"
      })

      .state('network', {
        url: '/network',
        templateUrl: 'app/network/network.html',
        controller: "NetworkCtrl"
      })

      .state('dialogs', {
        url: '/dialogs',
        templateUrl: 'app/dialogs/dialogs.html',
        controller: "DialogsCtrl"
      })

      .state('device', {
        url: '/device',
        templateUrl: 'app/device/device.html',
        controller: "DeviceCtrl"
      })

      .state('geolocation', {
        url: '/geolocation',
        templateUrl: 'app/geolocation/geolocation.html',
        controller: "GeolocationCtrl"
      })

      .state('globalization', {
        url: '/global',
        templateUrl: 'app/globalization/globalization.html',
        controller: "GlobalizationCtrl"
      })
      .state('camera', {
        url: '/camera',
        templateUrl: 'app/camera/camera.html',
        controller: "CameraCtrl"
      })

      .state('vibration', {
        url: '/vibration',
        templateUrl: 'app/vibration/vibration.html',
        controller: "VibrationCtrl"
      })

      .state('deviceOrientation', {
        url: '/deviceOrientation',
        templateUrl: 'app/deviceOrientation/deviceOrientation.html',
        controller: "DeviceOrientationCtrl"
      })

      .state('capture', {
        url: '/capture',
        templateUrl: 'app/capture/capture.html',
        controller: "CaptureCtrl"
      })

      .state('toast', {
        url: '/toast',
        templateUrl: 'app/toast/toast.html',
        controller: "ToastCtrl"
      })

      .state('touchid', {
        url: '/touchid',
        templateUrl: 'app/touchid/touchid.html',
        controller: "TouchIDCtrl"
      })

      .state('about', {
        url: '/about',
        templateUrl: 'template/about.html',
        controller: "AboutCtrl"
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/menu');
  });
