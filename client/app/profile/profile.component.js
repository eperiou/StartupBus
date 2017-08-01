'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profile.routes';


export class ProfileComponent {
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

export default angular.module('startupBusApp.profile', [uiRouter])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent,
  })
  .name;
