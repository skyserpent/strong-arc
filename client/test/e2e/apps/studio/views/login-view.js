var LoginView = (function () {
  function LoginView() {
    this.userNameInput = element(by.id('InputUserName'));
    this.passwordInput = element(by.id('InputPassword'));
    this.submitButton = element(by.css('.btn-primary'));
  }


  return LoginView;

})();

module.exports = LoginView;
