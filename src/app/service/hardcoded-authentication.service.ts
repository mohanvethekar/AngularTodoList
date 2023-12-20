import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'})
export class HardcodedAuthenticationService {
  username: any;
  password:  any;
isLoggedIn: any;
  // username= "Mohan" ;
  // password= "King";

  constructor() { }

  authenticate(username: any , password: any){
    // console.log('befor'+this.isUserLoggedIn());
    if(username=="Mohan" && password=='king'){
      sessionStorage.setItem('authenticated User' , username);
      // console.log('after'+this.isUserLoggedIn());
      return true ;
    }else
    {return false ;
  } 
    }
  isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticated User')
      return (user!==null)
    }
    logout(){
      sessionStorage.removeItem('authenticated User');
    }
  }


