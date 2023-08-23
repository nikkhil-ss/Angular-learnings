import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:  `
    <div>
      <div *ngIf="displayName; then thenBlock;else elseBlock" ></div>

      <ng-template #thenBlock>
      <h2>
      Name is Hidden(thhen Block)
      </h2>
    </ng-template>

      <ng-template #elseBlock>
        <h2>
        Name is Hidden(Else Block)
        </h2>
      </ng-template>

      <div [ngSwitch]="pickedColor">
      <h2 *ngSwitchCase="'red'" [style.color]="pickedColor">You Opted red Color</h2>
      <h2 *ngSwitchCase="'blue'" [style.color]="pickedColor">You Opted blue Color</h2>
      <h2 *ngSwitchCase="'green'" [style.color]="pickedColor">You Opted green Color</h2>
      <h2 *ngSwitchDefault>Pick Again</h2>
      </div>

      <div *ngFor="let color of colors;index as i">
        <h2 [style.color]="color">{{i}} {{color}}</h2>
      </div>

      <button (click)="fireEvent()">Send Event</button>

      {{name}}

    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public pickedColor='grn';
  colors=["green",'blue',"red","purple"];
  displayName=true;

  @Input('parentData') public name: any;
  @Output() public childEvent =new EventEmitter();


  fireEvent(){
    this.childEvent.emit('Hey from child component');
  }

}
