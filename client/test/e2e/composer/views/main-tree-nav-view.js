var MainTreeNavView = (function () {
  function MainTreeNavView() {
    this.modelNavRows  = element.all(by.css('.model-branch-container .branch-leaf-list [data-ui-type="row"]'));
    this.addModelButton = element(by.css('button[data-type="model"].nav-tree-item-addnew'));
    this.contextMenuTrigger = element(by.css('button.btn-nav-context'));
  }
  return MainTreeNavView;
})();

module.exports = MainTreeNavView;
