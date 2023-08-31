import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul class="items">
        <li (click)="onSelect(department)" *ngFor="let department of departmentList">
              <span class="badge"> {{department.id}}</span> {{department.name}}
        </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent {
  public departmentList=[
    {id:1,name:"Angalur"},
    {id:2,name:".Net"},
    {id:3,name:"React"},
    {id:4,name:"Bootstrap"},
  ]

  constructor(private router:Router)
  {}
  onSelect(department: { id: number; }){
    this.router.navigate(['/departments/',department.id])
  }
}
