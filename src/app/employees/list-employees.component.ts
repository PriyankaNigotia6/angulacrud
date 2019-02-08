import { Component, OnInit } from '@angular/core';
import { Employee } from '../modals/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
   employees: Employee[] = [
     {
      id: 1,
      name: 'chotu',
      gender: 'male',
      email: "shu@gmail.com",
      phoneNumber: 8800998881,
      contactPreference: "Email",
      dateOfBirth: new Date('05/25/1987'),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/one.jpg"
     },
     {
      id: 2,
      name: "monika",
      gender: "Female",
      email: "moni@gmail.com",
      phoneNumber: 9878988882,
      contactPreference: "Phone",
      dateOfBirth: new Date('11/27/1988'),
      department: "Sales",
      isActive: true,
      photoPath: "assets/images/two.jpg"
     },
     {
      id: 3,
      name: "Sweta",
      gender: "Female",
      email: "swe@gmail.com",
      phoneNumber: 9700898883,
      contactPreference: "Phone",
      dateOfBirth: new Date('01/22/1989'),
      department: "Telecom",
      isActive: true,
      photoPath: "assets/images/three.jpg"
     },

   ];
  constructor() { }

  ngOnInit() {
  }

}
