import { Component } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { Location } from '@angular/common'


@Component({
  selector: 'app-experience-pro',
  templateUrl: './experience-pro.component.html',
  styleUrls: ['./experience-pro.component.css']
})
export class ExperienceProComponent {
  disabled =false
  days: any[] = []
  months: Number[] = []
  years: any[] = []

  experienceForm! : FormGroup

  constructor(
    private experience : ExperienceService,
    private router : Router,
    private location : Location
    ){}


  ngOnInit(){
    this.experience.fill()
    //init start and end Date
    this.days = this.experience.days
    this.months = this.experience.months
    this.years = this.experience.years

    //init FormGroup
     this.experienceForm = new FormGroup({
      'poste' : new FormControl(),
      'employeur' : new FormControl(),
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
      'presentation' : new FormControl()
    }) 
  }

  onSubmit(){
    this.experience.addExperience(this.experienceForm.value)
    sessionStorage.setItem('cacheFromExperience', "false")
    this.location.back()
  }

  onToggleChange(event : any) {
    console.log(event)
    if(event.checked == true)
      this.experienceForm.get('endDate')?.disable()
    else
    this.experienceForm.get('endDate')?.enable()
  }
}

