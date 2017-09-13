import { OktaAuthService } from './okta/okta-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  constructor(public oktaAuthService: OktaAuthService) {    
    
  }

  ngOnInit() {      
  }  
}
