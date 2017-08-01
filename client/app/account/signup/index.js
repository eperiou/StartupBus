'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('startupbusApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
