import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , FormsModule ,RouterLink  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  username:any;
password:any ;
errormessage = " invalid credentials";
invalidLogin:boolean= false ;
key:any=false ;
welcome:any="Welcome" ;

constructor( private router:Router , public HardcodedAuthenticationService:HardcodedAuthenticationService){

}
  handleLogin(){
    console.log(this.username);
    // if(this.username=="Mohan" && this.password=="king")
    if(this.HardcodedAuthenticationService.authenticate(this.username ,this.password)){
      this.invalidLogin=false ;
      this.router.navigate(['welcome',this.username]);
     
      console.log("not running")

      this.key=true
    }else{
      this.invalidLogin=true;
      this.key=false
      console.log("running")
    }
  }
}
