import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthService} from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
email: any = {};
  
  firebaseAuth : AngularFireAuth;
  constructor(public auth : AngularFireAuth, private authService: AuthService, private router: Router) { }

  ngOnInit():  void{
  }

 resetPassword(){

  this.authService.resetPassword('emakhowane@gmail.com')
 }

  
}

