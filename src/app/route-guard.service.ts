import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './service/hardcoded-authentication.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService  {
  constructor(private HardcodedAuthenticationService: HardcodedAuthenticationService) { }
CanActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
  if(this.HardcodedAuthenticationService.isLoggedIn()){
  return true ;}
return false ;
}
}
