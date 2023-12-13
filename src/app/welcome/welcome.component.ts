import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Routes } from '@angular/router';
import { Form , FormsModule } from '@angular/forms'
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule , FormsModule , RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})


export class WelcomeComponent {
  username : any = "Mohan" ;
  constructor(private route:ActivatedRoute){
    this.username = this.route.snapshot.params['name']
  }

}
