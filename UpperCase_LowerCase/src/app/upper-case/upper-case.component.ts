import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upper-case',
  template: '<h4> Upper-case Result : {{parentData | uppercase}} </h4>',
  styleUrls: ['./upper-case.component.css']
})
export class UpperCaseComponent implements OnInit {

  constructor() { }
@Input() public parentData = "";
  ngOnInit(): void {
  }

}
