var StudioViews = require('../studio/views/');
var ComposerViews = require('../composer/views/');

describe('model-definition-interactions', function() {
  it('should login navigate to api composer, create a model, delete the model, logout', function() {

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

    modelEditorView.createNewModel('mynewmodel');

    expect(mainTreeNavView.modelNavRows.count === 1);

    mainTreeNavView.deleteFirstModel();

    expect(mainTreeNavView.modelNavRows.count === 0);

    headerView.logout();
  });

});
