import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject03';
  result!:string;
Display(val:string): void
{
  if(val == 'A')
  {
    this.result = "assets/images.jpg";
  }
  if(val == 'B')
  {
    this.result = "assets/mango.jpg";
  }
  if(val == 'C')
  {
    this.result = "assets/orange.jpg";
  }
  if(val == 'D')
  {
    this.result = "assets/pomo.jpg";
  }
}

}
