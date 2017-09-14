import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';

@Injectable()
export class OktaAuthService {

  oktaWidget; 

  constructor(private router: Router) {     
    
    this.oktaWidget = new OktaAuth({
      baseUrl: 'https://dev-982471.oktapreview.com',
      clientId: '0oac14i99qPj2fLHk0h7',
      //issuer: 'https://dev-982471.oktapreview.com/oauth2/default',
      redirectUri: 'http://localhost:4200',
    });
  }

  getWidget() {
    return this.oktaWidget;
  }

  isAuthenticated() {
    // Checks if there is a current accessToken in the TokenManger.
    return !!this.oktaWidget.tokenManager.get('accessToken');
  }

  login() {
    // Launches the login redirect.
    this.oktaWidget.token.getWithRedirect({ 
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile'],
      display: 'page'
    });
  }

  async handleAuthentication() {
    const tokens = await this.oktaWidget.token.parseFromUrl();
    tokens.forEach(token => {
      if (token.idToken) {
        this.oktaWidget.tokenManager.add('idToken', token);
      }
      if (token.accessToken) {
        this.oktaWidget.tokenManager.add('accessToken', token);
      }
    });    
  }

  getAccessToken() {
    // Return the token from the accessToken object.
    return this.oktaWidget.tokenManager.get("accessToken").accessToken;
  }

  async logout() {
    this.oktaWidget.tokenManager.clear();
    await this.oktaWidget.signOut();
  }  
}