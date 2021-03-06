import { HttpModule } from '@angular/http';
import { SearchService } from './services/search.service';
import { FormsModule } from '@angular/forms';
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
import { SearchComponent } from './search/search.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImplicitCallbackComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'edit/:id',
        component: EditPersonComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])    
  ],
  providers: [
    OktaAuthService,
    SearchService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
