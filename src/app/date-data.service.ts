import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateDATAService {

  days : Number[] = []

  months : Number[] = []

  years : Number[] = []

  constructor() { }

  fillDays() {
    for(let i =1; i<=31; i++)
      this.days?.push(i)
  }

  fillMonths(){
    for(let i =1; i<=12; i++)
    this.months?.push(i)
  }

  fillYears(){
    for(let i =2023; i>=1999; i--)
    this.years?.push(i)
  }

  fill(){
    this.fillDays()
    this.fillMonths()
    this.fillYears()
  }
}
