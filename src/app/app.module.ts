import { OktaAuthService } from './okta/okta-auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImplicitCallbackComponent } from './implicit-callback/implicit-callback.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImplicitCallbackComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'implicit/callback',
        component: ImplicitCallbackComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])   
  ],
  providers: [OktaAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
