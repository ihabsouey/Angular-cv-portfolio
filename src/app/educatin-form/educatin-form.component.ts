import { Component } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { DateDATAService } from '../date-data.service';
import { EducationService } from '../education.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-educatin-form',
  templateUrl: './educatin-form.component.html',
  styleUrls: ['./educatin-form.component.css']
})
export class EducatinFormComponent {
  days: any[] = []
  months: Number[] = []
  years: any[] = []

  educationForm! : FormGroup

  constructor(
    private dateData : DateDATAService,
    private educations : EducationService,
    private location : Location){}

   ngOnInit(){
    this.dateData.fill()
    //init start and end Date
    this.days = this.dateData.days
    this.months = this.dateData.months
    this.years = this.dateData.years


    //int educationForm
    this.educationForm = new FormGroup({
      'formation' : new FormControl(),
      'ecole' : new FormControl(),
      'domaine' : new FormControl(),
      'codePostal' : new FormControl(),
      'ville' : new FormControl(),
      'pays' : new FormControl(),
      'startDate' : new FormGroup({
        'day' : new FormControl("DD"),
        'month' : new FormControl("MM"),
        'year' : new FormControl("YYYY"),
      }),
      'endDate' : new FormGroup({
        'day' : new FormControl("DD"),
        'month' : new FormControl("MM"),
        'year' : new FormControl("YYYY"),
      }),
    })
   }

   onSubmit(){
    this.educations.addEducation(this.educationForm.value)
    sessionStorage.setItem('cacheFromEducation', "false")
    this.location.back()
  }

}
