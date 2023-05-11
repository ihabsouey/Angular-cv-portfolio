import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-education-cv',
  templateUrl: './one-education-cv.component.html',
  styleUrls: ['./one-education-cv.component.css']
})
export class OneEducationCvComponent {
  @Input() oneEducation : any = {}


  startDateED : any = {} ; sded !: Date
  endDateED : any = {}  ; eded !: Date

  ngOnInit(){
    this.startDateED = this.oneEducation.startDate
    this.endDateED = this.oneEducation.endDate 

    this.sded = new Date(Date.parse(this.startDateED.year+"-"+this.startDateED.month+"-"+this.startDateED.day))
    this.eded = new Date(Date.parse(this.endDateED.year+"-"+this.endDateED.month+"-"+this.endDateED.day))
  } 
}
