import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from './okta/okta-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  user;
  email; 
  oktaSignIn;

  constructor(public oktaAuthService: OktaAuthService) {
  
    //this.oktaSignIn = oktaAuthService.getWidget();    
  }  

  showLogin() {

    /*
    this.oktaSignIn.renderEl({el: '#okta-login-container'}, (response) => {

    // The properties in the response object depend on two factors:
    // 1. The type of authentication flow that has just completed, determined by res.status
    // 2. What type of token the widget is returning

    // The user has started the password recovery flow, and is on the confirmation
    // screen letting them know that an email is on the way.
    if (response.status === 'FORGOT_PASSWORD_EMAIL_SENT') {
      // Any followup action you want to take
      return;
    }

    // The user has started the unlock account flow, and is on the confirmation
    // screen letting them know that an email is on the way.
    if (response.status === 'UNLOCK_ACCOUNT_EMAIL_SENT') {
      // Any followup action you want to take
      return;
    }


      if(response.status === 'SUCCESS') {

        //response.session.setCookieAndRedirect('https://localhost:4200');
        if(response.claims) {
          this.user = response.claims.email;
        }        
        if(!this.user) {
          this.user = 'Nombre ficticio';
        }
        console.log(response);
                
        if (response.user.profile.firstName) {
          this.user = response.user.profile.firstName + ' ' + response.user.profile.lastName;
          this.email = response.user.profile.login;
        }
        
        if (response.session.token) {
          this.oktaSignIn.tokenManager.add('id_token', response.session.token);
        } 
      
        
        return;
      }
    });
    */
  }

  ngOnInit() {  

    this.oktaAuthService.handleAuthentication()
    .then((response) => {
      let token = sessionStorage.getItem("id_token")
        if(!token) {
          this.oktaAuthService.login();
        } else {
          this.user = "usuario forzado";
        }
    });    
    
    

    /* 
    this.oktaSignIn.session.get((response) => {
      if (response.status !== 'INACTIVE') {
        this.user = response.login;        
        console.log(response);
      } else {
        this.oktaAuthService.login();
        //this.showLogin();
      }
    });
    */
  }

  logout() {
    this.oktaAuthService.logout();
    /*
    this.oktaSignIn.signOut(() => {
      this.showLogin();
      this.user = undefined;
    });
    */
  }

}
