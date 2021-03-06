import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PixapiComponent } from './pixapi/pixapi.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'pixapi' , component: PixapiComponent , canActivate: [AuthGuard]},
  {path: 'signup' , component: SignupComponent},
  {path: 'login' , component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
