var StudioHeaderView = require('../studio/views/studio-header-view');
var LoginView = require('../studio/views/login-view');
var LandingView = require('../studio/views/landing-view');

var ComposerHomeView = require('../composer/views/composer-home-view');


describe('composer-navigation', function() {
  it('should login and navigation to API Composer view and log out', function() {

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

    landingView.composerAppCommand.click();


    // Composer Home
    var composerHomeView = new ComposerHomeView();
    expect(composerHomeView.projectTitleContainer.getText()).toEqual('EMPTY');


    var studioHeaderView = new StudioHeaderView();

    studioHeaderView.accountDropdown.click();
    studioHeaderView.logoutLink.click();


  });

});
