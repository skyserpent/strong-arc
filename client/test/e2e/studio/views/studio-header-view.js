var StudioHeaderView = (function () {
  function StudioHeaderView() {
    this.logoLink  = element(by.css('.branding a'));
    this.accountDropdown = element(by.css('span[data-id="StudioAccountDropdown"] a.dropdown-toggle'));
    this.logoutLink = element(by.css('[data-id="StudioLogoutLink"]'));
  }
  return StudioHeaderView;
})();

module.exports = StudioHeaderView;
