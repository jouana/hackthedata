(function () {
  'use strict';
  var app = require('angular').module('hackthedata');

  app.directive('header', require('./header'));

  app.directive('convertToNumber', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function (val) {
          return parseInt(val, 10);
        });
        ngModel.$formatters.push(function (val) {
          return '' + val;
        });
      }
    };
  });

  require('./chart');
}());
