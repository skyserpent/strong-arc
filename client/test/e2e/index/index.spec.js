describe('hello-protractor', function() {
  var ptor = protractor.getInstance();

  describe('index', function() {
    it('should display the correct title', function() {
      ptor.get('http://localhost:9800/#/studio');
      expect(ptor.getTitle()).toBe('StrongLoop Studio Beta');
    });
  });
});
var LoginView = require("../apps/studio/views/login-view");
var LandingView = require("../apps/studio/views/landing-view");
var ComposerHomeView = require("../apps/composer/views/composer-home-view");
var ModelEditorView = require("../apps/composer/views/model-editor-view");

describe('go-to-login', function() {
  var ptor = protractor.getInstance();

  describe('index', function() {
    it('should display the correct title', function() {
      ptor.get('http://localhost:9800/#/');

      element(by.id('SplashLoginLink')).click();


      // Login View
      var loginView = new LoginView();

      expect(loginView.userNameInput.getText()).toEqual('');

      loginView.userNameInput.sendKeys('seanbrookes@beachair.ca');
      loginView.passwordInput.sendKeys('hawkeye4');

      loginView.submitButton.click();

      // Landing View
      var landingView = new LandingView();
      expect(landingView.landingTitle.getText()).toEqual('StrongLoop Studio');
      landingView.composerAppCommand.click();

      // Composer Home
      var composerHomeView = new ComposerHomeView();
      expect(composerHomeView.projectTitleContainer.getText()).toEqual('EMPTY');
      composerHomeView.addModelButton.click();


      // Model Editor
      var modelEditorView = new ModelEditorView();
      expect(modelEditorView.modelNameInput.getAttribute('value')).toEqual('newModel');
      modelEditorView.modelNameInput.clear();
      modelEditorView.modelNameInput.sendKeys('mynewmodel');
      modelEditorView.saveModelButton.click();



      // Main Tree Nav
      var index = -1;
      element.all(by.css('.model-branch-container .branch-leaf-list [data-ui-type="row"]'))
        .then(function(elements) {
        // elements is an array of ElementFinders.

          for (var x = 0;x < elements.count;x++){
            var item = elements[0];
            var el = item(by.css('.nav-tree-item-header'));

            var testText = el.getText();
            if (testText = 'mynewmodel') {
              browser.debugger();
              index = x;
              break;
            }
          }


      });
      var row = element.all(by.css('.branch-leaf-list [data-ui-type="row"]')).get(index);
//          browser.debugger();
          var el2 = row(by.css('.nav-tree-item-header'));
//          expect(el2.getText().toEqual('mynewmodel'));


    });
  });
});
