import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { LanguesService } from '../langues.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-langue-form',
  templateUrl: './langue-form.component.html',
  styleUrls: ['./langue-form.component.css']
})
export class LangueFormComponent {
  lMaternelle!: String
  lAutres : String[] = []

  disabled = false

  selectedLangues: String[] = [];

  form !: FormGroup

  ddd = true

  constructor(
    private fb : FormBuilder,
    private langue : LanguesService,
    private location : Location
  ){}


  ngOnInit(){
    this.form = this.fb.group({
      'maternelle' : ['', Validators.required],
      'autre' : ['', Validators.required],
    })

    this.lMaternelle = this.langue.getLMaternelle()
    this.selectedLangues = this.langue.getLAutres()
  }

  addLangue(){
    const langue = this.form.value.maternelle
    if(langue){
      this.lMaternelle = langue.trim()
      this.disabled = true
    }
    this.form.get('maternelle')?.reset() 
  }

  removeLangue(){
    this.lMaternelle = ""
    this.disabled = false
  }
  
  addAutresLangue(){
    const anotherLangue = this.form.value.autre;
    if (anotherLangue && !this.selectedLangues.includes(anotherLangue)) {
      this.selectedLangues.push(anotherLangue);
    }
    this.form.get('autre')?.reset()
  }

  removeAutresLangue(lang : String){
    const index = this.selectedLangues.indexOf(lang)
    if(index >= 0)
      this.selectedLangues.splice(index,1)
  }

  onSubmit(){
    this.langue.addLMaternelle(this.lMaternelle)
    this.langue.add(this.selectedLangues)
    
    sessionStorage.setItem('cacheFromLangue', "false")
    this.location.back()
  } 


}
