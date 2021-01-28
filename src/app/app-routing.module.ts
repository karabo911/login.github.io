import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import {  ResetPasswordComponent} from './pages/reset-password/reset-password.component';

const routes: Routes = [
  { path : '', redirectTo : '/landing', pathMatch : 'full'},
  { path : 'landing', component : LandingComponent},
  { path : 'profile', component : ProfileComponent},
  { path : 'userinfo', component: UserinfoComponent},
  { path : 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
