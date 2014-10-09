var ModelEditorView = (function () {
  function ModelEditorView() {
    this.modelNameInput  = element(by.css('#ModelName'));
    this.saveModelButton = element(by.css('.model-save-button'));
  }
  return ModelEditorView;
})();

module.exports = ModelEditorView;
