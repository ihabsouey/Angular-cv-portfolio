import { UserDataService } from './../user-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ImageService } from '../image.service';
import { ExperienceService } from '../experience.service';
import { EducationService } from '../education.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  urlLink = "https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png"
  newUrlLink! : String
  cache = true
  cacheEpList = false  // pour gérer l'affissage du div de "Expérience profossionnelle"
  cacheEdList = false  // pour gérer l'affissage du div de "Education et formation"
  fname = ""
  lname = ""
  presentation = ""

  disable = true

  experiences : any[] = []
  educations : any[] = []
  
  constructor(
    private userDataService : UserDataService,
    private router : Router,
    private route : ActivatedRoute,
    private img : ImageService,
    private experience : ExperienceService,
    private education : EducationService
    ){}

  ngOnInit(){

    // init experiences
    this.educations = this.education.getEducations()
        
    if(sessionStorage.getItem('cacheFromExperience')==='false'){
      this.cache = false
      this.cacheEpList = true
      if(this.educations.length != 0)
        this.cacheEdList = true   
    } 

    // init educations
    this.experiences = this.experience.getExperiences()  

    if(sessionStorage.getItem('cacheFromEducation')==='false'){
      this.cache = false
      this.cacheEdList = true
      if(this.experiences.length != 0)
        this.cacheEpList = true
    } 

     sessionStorage.clear()

    //init infos person Values
    this.initValues()
    this.newUrlLink = this.img.getUrlLink()
  }
 
  onSubmit(f: any){
    this.userDataService.addToInfoPerso(f.value)

    this.newUrlLink = this.img.getUrlLink()

    this.cache=!this.cache

    //init fname and lname and presentation
    this.initValues()

   // this.router.navigateByUrl('/cv')
  }

  initValues(){
    this.fname = this.userDataService.getInfosPerso()[0].fname
    this.lname = this.userDataService.getInfosPerso()[0].lname
    this.presentation = this.userDataService.getInfosPerso()[0].presentation
  }

  changeCacheValue(){
    this.cache = !this.cache
  }

  selectedFiles(event : any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.img.addUrlLink(event.target.result)
        this.urlLink = this.newUrlLink = event.target.result
      }
    }
  }
  
  switchForm(mySelect:any){   
      switch(mySelect.value){
        case "EP" : this.router.navigateByUrl('/ep')
          break
        case "EF" : this.router.navigateByUrl('/ef')
          break
      }
  }

  onInputChange(event : any){
    const value = (event.target as HTMLInputElement).value
    this.disable = value !== "" ? false : true 
  }
 
}
