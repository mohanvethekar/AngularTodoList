import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form , FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
HardcodedAuthenticationService: any;
// isUserLoggedIn: any;

  // isUserLoggedIn : boolean = false ;
  // constructor( private HardcodedAuthenticationService : HardcodedAuthenticationService){
  //   // this.isUserLoggedIn = this.HardcodedAuthenticationService.isUserLoggedIn();
  // }

}
