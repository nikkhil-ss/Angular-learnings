import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <div>
  <a (click)="goPrevious()">Previous</a>
    <p>
      department-detail works {{departmentId}}
    </p>
    <a (click)="goNext()">Next</a>
    <button (click)="gotoDepartments()">Peeche Hatoo</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit  {

  public departmentId: any;
  constructor(private route:ActivatedRoute,private router:Router) {}
  ngOnInit() {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id=params.get('id');
        this.departmentId=id;
      });
  }
  //snapshot approacah not used becaause of not aautomatic rendering
  // ngOnInit():any{
  //     let id=this.route.snapshot.paramMap.get('id');
  //       this.departmentId=id;
  //     }

  goPrevious(){
    let previousId=parseInt(this.departmentId)-1;
    this.router.navigate(["/departments",previousId]);
  }
  goNext(){
    let nextId=parseInt(this.departmentId)+1;
    this.router.navigate(["/departments",nextId]);
  }

  gotoDepartments(){
    let selectedId=this.departmentId ? this.departmentId :null;

    this.router.navigate(["/departments",{id:selectedId}])
  }
}


