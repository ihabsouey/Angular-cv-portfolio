import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-one-experience-cv',
  templateUrl: './one-experience-cv.component.html',
  styleUrls: ['./one-experience-cv.component.css']
})
export class OneExperienceCvComponent {
  @Input() oneExperience: any = {}

  startDateEP : any = {} ; sdep !: Date
  endDateEP : any = {}  ; edep !: Date

  ngOnInit(){
    this.startDateEP = this.oneExperience.startDate
    this.endDateEP = this.oneExperience.endDate 

    this.sdep = new Date(Date.parse(this.startDateEP.year+"-"+this.startDateEP.month+"-"+this.startDateEP.day))
    this.edep = new Date(Date.parse(this.endDateEP.year+"-"+this.endDateEP.month+"-"+this.endDateEP.day))
  }
}
