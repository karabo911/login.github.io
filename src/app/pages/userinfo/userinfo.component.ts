import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  employee:string;
  employeeName:string;
  employeeAge:string;
  employeeAddress:string;
  
  message:string;

  constructor(public auth : AngularFireAuth, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createRecord(){

    let Record = {};
    Record['name'] = this.employeeName;
    Record['age'] = this.employeeAge;
    Record['address'] = this.employeeAddress;
   

    this.authService.create_Newemployee(Record).then(res=>{

      this.employeeName = "";
      this.employeeAge = undefined;
      this.employeeAddress = "";
      
      this.employee 
      console.log(res);
      this.message= "Employee data saved"

    }).catch(error=>{
      console.log(error);

    })
  }

  signOut(){

    this.auth.signOut().then(()=>{
    this.router.navigateByUrl('/landing').then(
      res =>{
        console.log('sign out successul');
      }
    )
 
   })

  }
}
