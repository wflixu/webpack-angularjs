

(function (window, angular) {
    'use strict';
    angular.module('comp').component('people', {
    template:  '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
               '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
             
    controller: function() {
      this.greeting = 'hello';
    
      this.toggleGreeting = function() {
        this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
      }
    }
  })

})(window, window.angular);

module.exports="people"