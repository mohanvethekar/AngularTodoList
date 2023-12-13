import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form ,FormsModule } from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
export class Todo{
  constructor(
    public id : number ,
    public description : String ,
    public Done : boolean ,
    public targatedate : Date 
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule , FormsModule ,RouterLink],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todo = [
    new Todo(1 , "Love Coding" , true , new Date() ),
    new Todo(2, "Love Swimming" , true , new Date() ),
    new Todo(1 , "Love You" , false , new Date() ), ]
    // {id:1 , description:'I love Coding' },{id:2 , description:'I love Money'} ,{id:1 , description:'I love Trekking'} ]
  // todo = {
    //  id : 123 ,
    //  description : "Learn Fullstack"

  // }

}
