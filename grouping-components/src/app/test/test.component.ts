import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` {{parentData}}
  <br>
  <button (click) = "fireEvent()">CLICK ME!... </button>`,
})
export class TestComponent implements OnInit {
  @Input() public 'parentData' : string;
  constructor() { }
 @Output() public 'childEvent' = new EventEmitter();

  ngOnInit(): void {
  }
  fireEvent()
  {
   this.childEvent.emit("Greets");
  }
}
