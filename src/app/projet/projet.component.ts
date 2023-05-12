import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateDATAService } from '../date-data.service';
import { EducationService } from '../education.service';
import { Location } from '@angular/common'
import { ImageService } from '../image.service';
import { ProjetService } from '../projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  days: any[] = []
  months: Number[] = []
  years: any[] = []

  projetForm! : FormGroup

  titre = ""
  description = ""
  lien = ""

  constructor(
    private dateData : DateDATAService,
    private img : ImageService,
    private location : Location,
    private projet : ProjetService){}

   ngOnInit(){
    this.dateData.fill()
   
    this.days = this.dateData.days
    this.months = this.dateData.months
    this.years = this.dateData.years


    //int educationForm
    this.projetForm = new FormGroup({
      'titre' : new FormControl(),
      'description' : new FormControl(),
      'linkprojet' : new FormControl(),
      'startDate' : new FormGroup({
        'day' : new FormControl("DD"),
        'month' : new FormControl("MM"),
        'year' : new FormControl("YYYY"),
      }),
      'endDate' : new FormGroup({
        'day' : new FormControl("DD"),
        'month' : new FormControl("MM"),
        'year' : new FormControl("YYYY"),
      })
      
    })

     this.titre = this.projet.tmp.titre
     this.description = this.projet.tmp.description
     this.lien = this.projet.tmp.linkprojet
   }

   onSubmit(){
    console.log(Object.keys(this.projet.tmp).length != 0)
    if(Object.keys(this.projet.tmp).length != 0){
      const index = this.projet.projets.indexOf(this.projet.tmp)
      this.projet.projets[index] = this.projetForm.value
      this.projet.tmp = {}
    }else{
      this.projet.addProjet(this.projetForm.value)
    }

    sessionStorage.setItem('cacheFromProjet', "false")
    this.location.back()
  }

    //upload image
    selectedFiles(event : any){
      if(event.target.files){
        var reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event:any) => {
          this.img.addUrlImgProjet(event.target.result)
        }
      }
    }
}
