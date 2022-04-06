import { Component } from '@angular/core';
import { Employee } from './core/dtos/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning Angular Tanisha';

  employees: Employee[] = [
    {id:1, Name: 'Salman1', Email: 'salman@gmail.com', IsActive: true},
    {id:2, Name: 'Tanisha', Email: 'tanisha@gmail.com', IsActive: true},
    {id:3, Name: 'Vinod', Email: 'vinod@gmail.com', IsActive: false},
    {id:4, Name: 'Ram', Email: 'ram@gmail.com', IsActive: true},
    {id:5, Name: 'Nikesh', Email: 'nikesh@gmail.com', IsActive: false},
  ]

  emailClicked(email: string) {
    console.log(email)
  }
}
