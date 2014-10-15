var StudioHeaderView = require('../studio/views/studio-header-view');
var LoginView = require('../studio/views/login-view');
var LandingView = require('../studio/views/landing-view');


describe('studio-login-logout', function() {
  it('should log into Studio confirm landing page and logout', function() {
    var ptor = protractor.getInstance();


    ptor.get('http://127.0.0.1:9800/#/login');
    //      // Login View
    var loginView = new LoginView();

    expect(loginView.userNameInput.getText()).toEqual('');

    loginView.userNameInput.sendKeys('strongloop-test@grr.la');
    loginView.passwordInput.sendKeys('Str0ngL00p');

    loginView.submitButton.click();

    // Landing View
    var landingView = new LandingView();
    expect(landingView.landingTitle.getText()).toEqual('StrongLoop Studio');


    var studioHeaderView = new StudioHeaderView();

    studioHeaderView.accountDropdown.click();
    studioHeaderView.logoutLink.click();


  });


});
