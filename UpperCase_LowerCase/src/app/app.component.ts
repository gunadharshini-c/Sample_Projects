import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template : <input type = "text" [(ngModel)] = "name" >
    // using a piping concept -
    <h2> User Result : {{name}} <br>
    Lowercase Result : {{name | lowercase}} <br>
    Uppercase Result : {{name | uppercase}} </h2> 
  */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UpperCase_LowerCase';
  public name = "";
}
