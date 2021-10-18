import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScreenerComponent } from './screener/screener.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Screener2Component } from './screener2/screeener2.component';
import { FinalPageComponent } from './final-page/final-page.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'screener', component: ScreenerComponent},
 {path: 'screener-2', component: Screener2Component},
  {path: 'userdetails', component: UserDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'final-page', component: FinalPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
