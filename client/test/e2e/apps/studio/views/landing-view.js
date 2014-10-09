var LandingView = (function () {
  function LandingView() {
    this.landingTitle  = element(by.css('.landing-title'));
    this.composerAppCommand  = element(by.css('a[href="#/studio"]'));
  }
  return LandingView;
})();

module.exports = LandingView;
