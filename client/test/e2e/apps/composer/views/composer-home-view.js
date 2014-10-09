var ComposerHomeView = (function () {
  function ComposerHomeView() {
    this.projectTitleContainer  = element(by.css('.ia-project-title-container'));
    this.addModelButton = element(by.css('.nav-tree-item-addnew'));
  }
  return ComposerHomeView;
})();

module.exports = ComposerHomeView;
