var StudioHeaderView = require('../studio/views/studio-header-view');
var LoginView = require('../studio/views/login-view');
var LandingView = require('../studio/views/landing-view');
var MainTreeNavView = require('../composer/views/main-tree-nav-view');
var ComposerHomeView = require('../composer/views/composer-home-view');
var ModelEditorView = require('../composer/views/model-editor-view');

describe('model-definition-interactions', function() {
  it('should login navigate to api composer, create a model, delete the model, logout', function() {
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

    var mainTreeNavView = new MainTreeNavView();
    mainTreeNavView.addModelButton.click();

    // Model Editor
    var modelEditorView = new ModelEditorView();
    expect(modelEditorView.modelNameInput.getAttribute('value')).toEqual('newModel');
    modelEditorView.modelNameInput.clear();
    modelEditorView.modelNameInput.sendKeys('mynewmodel');
    modelEditorView.saveModelButton.click();
    expect(element.all(by.css('.model-branch-container .tree-item-row')).count === 1);


    // Main Tree Nav
    var modelInstanceNav = element
      .all(by.css('.model-branch-container .tree-item-row button.btn-nav-context'))
      .get(0);

    browser.driver.actions().click(modelInstanceNav).perform();

    var deleteButton = element(by.css('.context-menu-item'));
    browser.driver.actions().click(deleteButton).perform();

    var alertDialog = ptor.switchTo().alert();

    alertDialog.accept();

    expect(element.all(by.css('.model-branch-container .tree-item-row')).count === 0);

    var studioHeaderView = new StudioHeaderView();

    studioHeaderView.accountDropdown.click();
    studioHeaderView.logoutLink.click();
  });

});
