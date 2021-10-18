import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScreenerComponent } from './screener/screener.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { Screener2Component } from './screener2/screeener2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { FinalPageComponent } from './final-page/final-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScreenerComponent,    
    PageNotFoundComponent, 
    UserDetailsComponent, 
    LoginComponent,
    Screener2Component, 
     RegisterComponent, FinalPageComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,   
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
