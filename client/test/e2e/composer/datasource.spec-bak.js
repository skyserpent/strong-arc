var StudioViews = require('../studio/views/');
var ComposerViews = require('../composer/views/');

describe('datasource-definition-interactions', function() {
  it('should login, open default db, logout', function() {

    var loginView = new StudioViews.LoginView();
    var landingView = new StudioViews.LandingView();
    var mainTreeNavView = new ComposerViews.MainTreeNavView();
    var dataSourceEditorView = new ComposerViews.DataSourceEditorView();
    var headerView = new StudioViews.HeaderView();

    loginView.loginToLandingView();

    landingView.openComposerView();

    mainTreeNavView.openFirstDataSource();

    expect(dataSourceEditorView.dataSourceNameInput.getAttribute('value')).toEqual('db');

    headerView.logout();
  });

});
