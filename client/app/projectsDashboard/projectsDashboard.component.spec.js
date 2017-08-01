'use strict';

describe('Component: ProjectsDashboardComponent', function() {
  // load the controller's module
  beforeEach(module('startupBusApp.projectsDashboard'));

  var ProjectsDashboardComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProjectsDashboardComponent = $componentController('projectsDashboard', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
