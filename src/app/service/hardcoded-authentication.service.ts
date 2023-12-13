import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'})
export class HardcodedAuthenticationService {
  username: any;
  password:  any;
  // username= "Mohan" ;
  // password= "King";

  constructor() { }

  authenticate(_username: any , _password: any){
    // console.log('befor'+this.isUserLoggedIn());
    if(_username=="Mohan" && _password=='king'){
      sessionStorage.setItem('authenticated User' , _username);
      // console.log('after'+this.isUserLoggedIn());
      return true ;
    }else{return false ;
  } 
    }
    isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticated User')
      return !(user==null) 
    }
  }


