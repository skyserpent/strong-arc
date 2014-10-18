var StudioViews = require('../studio/views/');
var ComposerViews = require('../composer/views/');

describe('model-definition-interactions', function() {
  it('should login navigate to api composer, create a model, create a property, delete the model, logout', function() {

    var loginView = new StudioViews.LoginView();
    var landingView = new StudioViews.LandingView();
    var mainTreeNavView = new ComposerViews.MainTreeNavView();
    var modelEditorView = new ComposerViews.ModelEditorView();
    var headerView = new StudioViews.HeaderView();

    loginView.loginToLandingView();

    landingView.openComposerView();

    expect(mainTreeNavView.modelNavRows.count === 0);

    mainTreeNavView.openNewModelView();

    expect(modelEditorView.modelNameInput.getAttribute('value')).toEqual('newModel');

    modelEditorView.createNewModel('mynewmodel3');

    browser.waitForAngular();
    element(by.css('[data-id="CommonInstanceContainer"]')).click();

    var filter = browser.findElement(by.css('.btn-new-model-property'));
    var scrollIntoView = function () {
      arguments[0].scrollIntoView();
    };
    browser.executeScript(scrollIntoView, filter);

    modelEditorView.addNewProperty('mynewproperty');

    expect(mainTreeNavView.modelNavRows.count === 1);

    browser.waitForAngular();

    expect(modelEditorView.propertyNameInputCollection.get(0).getAttribute('value')).toEqual('mynewproperty');

    mainTreeNavView.deleteFirstModel();

    expect(mainTreeNavView.modelNavRows.count === 0);

    headerView.logout();
  });

});
