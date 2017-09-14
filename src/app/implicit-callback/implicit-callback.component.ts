import { Router } from '@angular/router';
import { OktaAuthService } from './../okta/okta-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implicit-calback',
  templateUrl: './implicit-callback.component.html',
  styleUrls: ['./implicit-callback.component.css']
})
export class ImplicitCallbackComponent implements OnInit {

  constructor(private route: Router,
              private oktaAuthService: OktaAuthService) { 

    oktaAuthService.handleAuthentication();        
  }

  ngOnInit() {
  }

}
