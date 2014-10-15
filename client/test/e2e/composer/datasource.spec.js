var StudioHeaderView = require('../studio/views/studio-header-view');
var LoginView = require('../studio/views/login-view');
var LandingView = require('../studio/views/landing-view');
var ComposerHomeView = require('../composer/views/composer-home-view');
var DataSourceEditorView = require('../composer/views/datasource-editor-view');

describe('datasource-definition-interactions', function() {
  it('should login, open default db, logout', function() {
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

    // DataSource Editor
    var dataSourceEditorView = new DataSourceEditorView();
    var ds = element
      .all(by.css('.datasource-branch-container .tree-item-row button.nav-tree-item'))
      .get(0).click();

    expect(dataSourceEditorView.dataSourceNameInput.getAttribute('value')).toEqual('db');

    var studioHeaderView = new StudioHeaderView();

    studioHeaderView.accountDropdown.click();
    studioHeaderView.logoutLink.click();
  });

});
