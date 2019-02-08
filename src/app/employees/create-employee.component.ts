import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../modals/department.modal';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Employee } from '../modals/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 // gender = 'male'; // if want to set default male in form bcoz of ngmodel 2 way databinding from here we need to do in place of html
   // for deault checked we can't do it from html by checked attribute then ngmodal have to 
   // remove so not work for two way data binding so add here this property true. 
  isActive = true;
  previewPhoto = false;
  // for datepicker configuration like theme min max date set
  datepickerconfig: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Sales'},
    {id: 4, name: 'Marketing'}
  ];

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };

  constructor() {
    // configuration to set datepicker theme bule and some other fields like weekno,min,max date etc
    this.datepickerconfig = Object.assign({}, {containerClass: 'theme-dark-blue',
     showWeekNumbers: false, minDate : new Date(1960, 0 , 1) , dateInputFormat: 'DD/MM/YYYY'});
   }

   togglePhotoPreview() {
     this.previewPhoto = !this.previewPhoto;
   }

  ngOnInit() {
  }
  // // for angular generated form
  // saveEmployee(empForm: NgForm): void {
  //  console.log(empForm.value);
  // }

  saveEmployee(newEmployee: Employee): void {
      console.log(newEmployee);
     }

}
