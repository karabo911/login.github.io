import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from "firebase"

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  email ="";
  password ="";
  

  constructor(public auth : AngularFireAuth, private authService: AuthService, private router: Router) { }

  ngOnInit(): void{
    
   
  }

  

  login()
  {
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch(error => console.log(error.code)
    )
    .then(res => console.log(res)).then(res =>{
      this.router.navigateByUrl('/userinfo'); 
    })


  }

  loginWithGoogle(){
    this.authService.loginwithGoogle();
  }

  resetPassword(){
    this.authService.resetPassword('email');
  }

 
  

}
