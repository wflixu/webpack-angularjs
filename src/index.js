import angular from 'angular';

const appTpl = require('./comopnents/app.html').default; 


import './style/app.css';

let app = () => {
    return {
        template: appTpl ,
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;