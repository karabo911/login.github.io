import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Router} from '@angular/router';

import firebase from 'firebase/app';
import 'firebase/auth';
import {User} from './User';
import {AngularFirestore} from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: User;
  authState: any = null;

  constructor( private afu: AngularFireAuth, private router : Router, private fireAuth : AngularFireAuth, public fireservices: AngularFirestore) {
this.fireAuth.authState.subscribe(user=>{
  this.user=user;
})
    
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))

    
   }

   registerWithEmailandPassword(email:string, password:string)
   {
    this.afu.createUserWithEmailAndPassword(email,password).then((user)=>
    
    {
      console.log('successfully registered user')
      this.authState = user;
      
    }).catch(error =>
      {
     console.log(error)
     throw error
    });
    
    
    
   }

  async loginwithGoogle(){
    await this.afu.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res =>{
        console.log('Login Successful');
      }).catch(err=>{
        console.log('Error while sign in', err);
      });
  }

  resetPassword(email:string){
    this.afu.sendPasswordResetEmail(email).then( res =>
    {
      console.log('reset password sent', res);
      
    }).catch(error=>{
      console.log(error);
      
    });

 }

 create_Newemployee(Record)
 {
return this.fireservices.collection('Employee').add(Record);
 }

 
 
  
}