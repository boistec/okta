import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './okta/okta-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user;  
  oktaSignIn;

  constructor(public oktaAuthService: OktaAuthService) {
  
    this.oktaSignIn = oktaAuthService.getWidget();
  }  

  showLogin() {
    this.oktaSignIn.renderEl({el: '#okta-login-container'}, (response) => {
      if(response.status === 'SUCCESS') {
        this.user = response.claims.email;
      }
    });
  }

  ngOnInit() {    
    this.oktaSignIn.session.get((response) => {
      if (response.status !== 'INACTIVE') {
        this.user = response.login;
      } else {
        this.showLogin();
      }
    });
  }

  logout() {
    this.oktaSignIn.signOut(() => {
      this.showLogin();
      this.user = undefined;
    });
  }

}
