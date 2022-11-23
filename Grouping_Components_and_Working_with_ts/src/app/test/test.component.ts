import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:  `<h2 *ngIf = "displayname; else elseBlock" > My name is Gunadharshini </h2>
  <ng-template #elseBlock>
    <h2> My name is hidden</h2>
    <p> inorder to view my name, please make displayname as true, Thankyou:) </p> </ng-template>
  `,
})
export class TestComponent implements OnInit {
 public displayname = false ;   
  constructor() { }

  ngOnInit(): void {
  }

}