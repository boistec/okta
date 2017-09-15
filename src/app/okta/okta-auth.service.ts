import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';
declare let OktaSignIn: any;

@Injectable()
export class OktaAuthService {

  oktaAuth;
  oktaWidget;
  
  constructor(private router: Router) {     
    
    this.oktaWidget = new OktaSignIn({
      baseUrl: 'https://dev-982471.oktapreview.com',
      clientId: '0oac14i99qPj2fLHk0h7',
      redirectUri: 'http://localhost:4200/implicit/callback'
    });


    this.oktaAuth = new OktaAuth({
      url: 'https://dev-982471.oktapreview.com',
      clientId: '0oac14i99qPj2fLHk0h7',
      issuer: 'https://dev-982471.oktapreview.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback'
    });
  }

  getWidget() {
    return this.oktaWidget;
  }

  isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!this.oktaAuth.tokenManager.get('accessToken');
  }

  login() {
    // Launches the login redirect.
    this.oktaAuth.token.getWithRedirect({ 
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile'],
      display: 'page'
    });
  }

  async handleAuthentication() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaAuth.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaAuth.tokenManager.add('accessToken', token);
      }
    });    
  }

  getAccessToken() {
    // Return the token from the accessToken object.
    return this.oktaAuth.tokenManager.get("accessToken").accessToken;
  }

  async logout() {
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }  
}