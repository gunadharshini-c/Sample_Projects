import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lower-case',
  template: '<h4> lower-case Result : {{parentData | lowercase}} </h4>',
  styleUrls: ['./lower-case.component.css']
})
export class LowerCaseComponent implements OnInit {

  constructor() { }
  @Input() public parentData = "";
  ngOnInit(): void {
  }

}
