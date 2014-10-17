var ModelEditorView = (function () {
  function ModelEditorView() {
    this.modelNameInput  = element(by.css('#ModelName'));
    this.saveModelButton = element(by.css('.model-save-button'));

    this.createNewModel = function(modelName) {
      this.modelNameInput.clear();
      this.modelNameInput.sendKeys(modelName);
      this.saveModelButton.click();
    };
  }
  return ModelEditorView;
})();

module.exports = ModelEditorView;
