import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <div>
  <h2>Employee Listt</h2>
  <h2>{{errorMsg}}</h2>
  <ul *ngFor="let employee of employees">
      <li> {{employee.id}}--{{employee.name}}--{{employee.age}}</li>
  </ul>

  </div>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employees:any[]=[];
  public errorMsg="";
constructor(private _employeeService:EmployeeService) {

}

  ngOnInit(){
    this._employeeService.getEmployees().subscribe(data=>this.employees=data,
                                                error=>this.errorMsg=error);

  }



}
