'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profile.routes';



export class ProfileComponent {
  'ngInject';

  constructor() {
    this.message = 'Hello';
    this.int = 1
    this.photos = [1, 2, 3, 4, 5];
  }
  logConsole() {
    this.int++;
    console.log('yeahbuddy')
  }

}

export default angular.module('startupBusApp.profile', [uiRouter])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent,
  })
  .name;
