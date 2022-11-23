import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { formatDate } from '@angular/common';

import localeEl from '@angular/common/locales/el';
import localePy from '@angular/common/locales/es';
import localePt from '@angular/common/locales/pt';
import localeTa from '@angular/common/locales/ta';
import localeHi from '@angular/common/locales/hi';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEl, 'el');
registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeTa, 'ta');
registerLocaleData(localeHi, 'hi' )
@Component({
  selector: 'app-current-date',
  templateUrl:  './current-date.component.html',
  styleUrls: ['./current-date.component.css']
})
export class CurrentDateComponent implements OnInit {
  public date = new Date();
  public days: string;
  private day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public LocalDate = new Date().toLocaleString();
  //public todayDate = '';

  constructor() { 
    setInterval(() => {
      this.date = new Date();
     //this.todayDate= formatDate(this.date, 'dd-MM-yyyy hh:mm:ss a', "en-US");
    }, 1)

    

    this.days = this.day[this.date.getDay()];
  }

  ngOnInit(): void {
 
  }
}
