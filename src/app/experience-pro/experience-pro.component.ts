import { Component } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { ProjetService } from '../projet.service';


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

  poste = ""
  employer = ""
  presentation = ""

  constructor(
    private experience : ExperienceService,
    private router : Router,
    private location : Location,
    private projet : ProjetService
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

   this.poste = this.projet.tmp.poste
   this.employer = this.projet.tmp.employeur
   this.presentation = this.projet.tmp.presentation
  }

  onSubmit(){
    if(Object.keys(this.projet.tmp).length != 0){
      const index = this.experience.experiences.indexOf(this.projet.tmp)
      this.experience.experiences[index] = this.experienceForm.value
      this.projet.tmp = {}
    }else{
      this.experience.addExperience(this.experienceForm.value)

    }

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



