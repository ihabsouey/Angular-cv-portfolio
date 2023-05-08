import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  experiences : any[] = []

  days : Number[] = []

  months : Number[] = []

  years : Number[] = []

  addExperience(data : any){
    this.experiences?.push(data)
  }

  getExperiences(){
    return this.experiences
  }

  fillDays() {
    for(let i =1; i<=31; i++)
      this.days?.push(i)
  }

  fillMonths(){
    for(let i =1; i<=12; i++)
    this.months?.push(i)
  }

  fillYears(){
    for(let i =2024; i>=1999; i--)
    this.years?.push(i)
  }

  fill(){
    this.fillDays()
    this.fillMonths()
    this.fillYears()
  }
}
