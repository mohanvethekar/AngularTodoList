import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form , FormsModule } from '@angular/forms';
@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  errorMessage:any = "Somme arror occurs contact ***-***";

}
