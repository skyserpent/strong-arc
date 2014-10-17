var MainTreeNavView = (function () {
  function MainTreeNavView() {
    this.modelNavRows = element.all(by.css('.model-branch-container .tree-item-row'));
    this.modelCtxBtns = element.all(by.css('.model-branch-container .tree-item-row button.btn-nav-context'))
    this.addModelButton = element(by.css('button[data-type="model"].nav-tree-item-addnew'));
    this.ctxMenuTrigger = element(by.css('.context-menu-item'));
    this.dataSourceNavItems = element.all(by.css('.datasource-branch-container .tree-item-row button.nav-tree-item'));
    this.contextMenuTrigger = element(by.css('button.btn-nav-context'));

    this.openNewModelView = function() {
      this.addModelButton.click();
    };
    this.openFirstDataSource = function() {
      this.dataSourceNavItems.get(0).click();
    };
    this.deleteFirstModel = function() {
      var ptor = protractor.getInstance();
      // Main Tree Context Menu
      var modelNavCtx = this.modelCtxBtns.get(0);

      browser.driver.actions().click(modelNavCtx).perform();

      var deleteButton = this.ctxMenuTrigger;
      browser.driver.actions().click(deleteButton).perform();

      var alertDialog = ptor.switchTo().alert();

      alertDialog.accept();
    };
  }
  return MainTreeNavView;
})();

module.exports = MainTreeNavView;
