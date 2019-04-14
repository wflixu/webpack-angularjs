 require('jquery');
import angular from 'angular';

require('./comopnents/hello.js');
// console.log(people);

import ngAnimation from 'angular-animate';
// require('angular-animate');
require('angular-ui-router');


const MODULE_NAME = 'app';
const appTpl = require('./comopnents/app.html').default;


import './style/app.css';

let app = () => {
    return {
        template: appTpl,
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

function AppCtrl($scope) {
    $scope.show = true;
    $scope.list = [];
    for (let index = 0; index < 5; index++) {
        $scope.list.push(index);

    }
    $scope.add = function () {

        $scope.list.push((Math.floor(Math.random() * 1000)));
        $scope.list.push((Math.floor(Math.random() * 1000)));



    }
    $scope.toggle = () => {
        if ($scope.show) {
            $scope.show = false;
            $scope.list = [];
        } else {
            $scope.show = true;
            console.log('dd')
            // $scope.show = !$scope.show;
            for (let index = 0; index < 5; index++) {
                $scope.list.push(index);

            }
        }

    }



}


angular.module(MODULE_NAME, [require('angular-animate'), 'ui.router','comp'])

    .config(function ($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            template: '<h3>hello world!</h3>'
        }
        var peopleState = {
            name: 'people',
            url: '/people',
            component: 'people',
            // resolve: {
            //     people: function (PeopleService) {
            //         return PeopleService.getAllPeople();
            //     }
            // }
        };

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
        $stateProvider.state(peopleState);
    })
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;