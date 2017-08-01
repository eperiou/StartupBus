'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './projectsDashboard.routes';

export class ProjectsDashboardComponent {
  /*@ngInject*/
  $http;
  photos;
  message;
  int;
  constructor($http) {
    this.$http = $http;
    this.message = 'Hello';
    this.int = 1
    this.photos = [1, 2, 3, 4, 5];
  }

  $onInit() {
    this.$http.get('http://localhost:3000/api/projects')
      .then((success)=>console.log(success,'success'))
      .catch(err=>console.log(err,'error'))
  }
}

export default angular.module('startupBusApp.projectsDashboard', [uiRouter])
  .config(routes)
  .component('projectsDashboard', {
    template: require('./projectsDashboard.html'),
    controller: ProjectsDashboardComponent,
    // controllerAs: 'projectsDashboardCtrl'
  })
  .name;
