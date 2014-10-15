var LandingView = (function () {
  function LandingView() {
    this.landingTitle  = element(by.css('.landing-title'));
    this.composerAppCommand  = element(by.css('.sl-apps a[ui-sref="composer"].app-launch'));
  }
  return LandingView;
})();

module.exports = LandingView;
