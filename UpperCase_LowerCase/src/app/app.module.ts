import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperCaseComponent } from './upper-case/upper-case.component';
import { LowerCaseComponent } from './lower-case/lower-case.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperCaseComponent,
    LowerCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
