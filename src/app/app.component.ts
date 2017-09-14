import { OktaAuthService } from './okta/okta-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(public oktaAuthService: OktaAuthService) {    
    oktaAuthService.handleAuthentication();         
  }  
}
