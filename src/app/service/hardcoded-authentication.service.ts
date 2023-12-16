import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'})
export class HardcodedAuthenticationService {
  username: any;
  password:  any;
  // username= "Mohan" ;
  // password= "King";

  constructor() { }

  authenticate(_username: any , _password: any){
    console.log('befor'+this.isUserLoggedIn());
    if(_username=="Mohan" && _password=='king'){
      sessionStorage.setItem('authenticated User' , _username);
      console.log('after'+this.isUserLoggedIn());
      return true ;
    }else{return false ;
  } 
    }
  isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticated User')
      return !(user==null) 
    }
    logout(){
      sessionStorage.removeItem('authenticated User');
    }
  }


