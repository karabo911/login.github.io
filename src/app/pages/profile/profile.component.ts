import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router }from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  email ="";
  password ="";
  then : any;
  errorMessage = ''; //validation error handle
  error: { name: string, message: string } = { name: '', message: ''}; //for firebase error handle

  constructor(private authservice : AuthService, private router: Router) { }

  ngOnInit(): void {
    

    
  }

  register()
  {
    this.authservice.registerWithEmailandPassword('emakhowane@gmail.com', 'Makhowane96')
     
    }
}
