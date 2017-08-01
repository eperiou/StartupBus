'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('projectsDashboard', {
      url: '/projectsDashboard',
      template: '<projects-dashboard></projects-dashboard>'
    });
}
