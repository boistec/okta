var oktaSignIn = new OktaSignIn({
  baseUrl: "https://dev-982471.oktapreview.com",
  clientId: "0oac0q873fhcsHCMz0h7",
  authParams: {
    issuer: "https://dev-982471.oktapreview.com/oauth2/default",
    responseType: ['token', 'id_token'],
    display: 'page'
  }
});

if (oktaSignIn.token.hasTokensInUrl()) {
  oktaSignIn.token.parseTokensFromUrl(
    function success(res) {
      // Store the tokens in the token manager in the order requested
      oktaSignIn.tokenManager.add('accessToken', res[0]);
      oktaSignIn.tokenManager.add('idToken', res[1]);
    },
    function error(err) {
      // handle errors as needed
      console.error(err);
    }
  );
} else {

  oktaSignIn.session.get(function (res) {
    // Session exists, show logged in state.
    if (res.status === 'ACTIVE') {
      console.log('Hello, ' + res.login);
      return;
    }

    oktaSignIn.renderEl(
      { el: '#okta-login-container' },
      function success(res) {
        // Nothing to do here, the widget will automatically redirect
        // the user to Okta for session creation
      },
      function error(err) {
        // handle errors as needed
        console.error(err);
      }
    );
  });
}