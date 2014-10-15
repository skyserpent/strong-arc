var DataSourceEditorView = (function () {
  function DataSourceEditorView() {
    this.dataSourceNameInput  = element(by.css('#name'));
    this.saveDataSourceButton = element(by.css('.model-save-button'));
  }
  return DataSourceEditorView;
})();

module.exports = DataSourceEditorView;
