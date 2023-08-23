import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
  hello from class {{name}}
  <h2>{{greetUser()}}</h2>
  <input type="text" value="Nikhil" [id]="myId">
  <input type="text" value="Nikhil" [id]="myId" [disabled]="isDisabled">
  <h2 class="text-success">Testing Style</h2>
  <h2 [class]="specialClass">Testing Style</h2>
  <h2 [class.text-danger]="hasError">Testing Style</h2>

  <h2 [style.color]="hasError ? 'red': 'green'"> Coonditional Styling </h2>
  <h2 [ngStyle]="bindingStyle"> NG Styling </h2>

  <button (click)="onClick($event)">lick me</button>
  <button (click)="greeting='Welcome Nikhhil'">Click me</button>
  {{greeting}}

  <input type="text" #myInput>
  <button (click)="logMessage(myInput.value)">Log</button>

  <input type="text" [(ngModel)]="liveName">
  {{liveName}}

  </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  public name = "Nikhil";
  public liveName="";
  public myId = "testId";
  public isDisabled = true;
  public specialClass = "text-special";
  public greeting="";

  public hasError = true;
  public bindingStyle={
    color:"brown",
    fontStyle:"italic"
  }
  greetUser() {
    return "Welcome" + this.name;
  }
  onClick(event: any){
    console.log(event);
    this.greeting=event.type;
  }
  logMessage(input:any){
    console.log(input);
  }

}
