'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('admin', function() {

    beforeEach(function() {
      browser.get('index.html#!/admin');
    });


    it('should render admin when user navigates to /admin', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
