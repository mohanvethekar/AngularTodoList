import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  HardcodedAuthenticationService: any;
  constructor(HardcodedAuthenticationService:HardcodedAuthenticationService){
    this.HardcodedAuthenticationService.logout();
  }
}
