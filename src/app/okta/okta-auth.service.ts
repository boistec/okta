import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as OktaAuth from '@okta/okta-auth-js/dist/okta-auth-js.min.js';
import { JwtHelper } from 'angular2-jwt'

declare let OktaSignIn: any;

@Injectable()
export class OktaAuthService {

  
  oktaAuth: any; 
  oktaWidget: any;
  
  constructor(private router: Router) {
    
    /*
    this.oktaWidget = new OktaSignIn({
      baseUrl: 'https://dev-982471.oktapreview.com',
      clientId: '0oac14i99qPj2fLHk0h7',
      redirectUri: 'http://localhost:4200/implicit/callback'
    });    
    */

    /*
    this.oktaWidget = new OktaSignIn({
      baseUrl: 'https://dev-982471.oktapreview.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
      helpSupportNumber: '(55) 5555-1234',

      authParams: {
        responseType: ['id_token', 'token'],
        scopes: ['openid', 'email', 'profile'],       
        display: 'page'
      },

    });
    */
    
    this.oktaAuth = new OktaAuth({
      url: 'https://dev-982471.oktapreview.com',
      clientId: '0oac14i99qPj2fLHk0h7',
      //issuer: 'https://dev-982471.oktapreview.com/oauth2/default',
      redirectUri: 'http://localhost:4200/'
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
      scopes: ['openid', 'email', 'profile']
    });
  }

  async handleAuthentication() {
    const token = await this.oktaAuth.token.parseFromUrl._getLocationHash().replace("#id_token=", "");;
    if(token) {
      sessionStorage.setItem('id_token', token);
      window.location.href= "/";
    }    
  }

  getAccessToken() {
    // Return the token from the accessToken object.
    return this.oktaAuth.tokenManager.get("accessToken").accessToken;
  }

  getUserInfo() {
    let token  = sessionStorage.getItem('id_token');
    console.log(this.oktaAuth.decode(token));
  }

  async logout() {
    sessionStorage.clear();
    this.oktaAuth.tokenManager.clear();
    await this.oktaAuth.signOut();
  }  
}