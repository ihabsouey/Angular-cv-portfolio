import { UserDataService } from './../user-data.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { ImageService } from '../image.service';
import { ExperienceService } from '../experience.service';
import { EducationService } from '../education.service';
import { CompetenceService } from '../competence.service';
import { LanguesService } from '../langues.service';
import { LoisirService } from '../loisir.service';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  urlLink = "https://oasys.ch/wp-content/uploads/2019/03/photo-avatar-profil.png"
  newUrlLink! : String
  cache = false
  cacheEpList = false  // pour gérer l'affissage du div de "Expérience profossionnelle" et option dans select
  cacheEdList = false  // pour gérer l'affissage du div de "Education et formation" et option dans select
  cacheCList = false  // pour gérer l'affissage du div de "Competences" et option dans select
  cacheLlist = false  // pour gérer l'affissage du div de "Langues" et option dans select
  cacheLoisirList = false // pour gérer l'affissage du div de "loisir" et option dans select
  fname = ""
  lname = ""
  presentation = ""

  disable = true  // pour désactiver le bouton si une section n'est pas selectionner

  experiences : any[] = []
  educations : any[] = []
  competences : any[] = []
  langueMaternelle : any = "" 
  autresLangues : any[] = []
  loisirs : any[] = []
  
  constructor(
    private userDataService : UserDataService,
    private router : Router,
    private img : ImageService,
    private experience : ExperienceService,
    private education : EducationService,
    private competence : CompetenceService,
    private langue : LanguesService,
    private loisir : LoisirService
    ){}

  ngOnInit(){

    // init experiences
    this.educations = this.education.getEducations()
    // init educations
    this.experiences = this.experience.getExperiences()  
    //init competences
    this.competences = this.competence.getCompetences()
    // init langueMaternelle and autresLangue
    this.langueMaternelle =  this.langue.getLMaternelle()
    this.autresLangues = this.langue.getLAutres()
    // init les loisirs
    this.loisirs = this.loisir.loisirs

    if(sessionStorage.getItem('cacheFromExperience')==='false'){
      this.cache = false
      this.cacheEpList = true
      if(this.educations.length != 0)
        this.cacheEdList = true  
      
      if(this.competences.length != 0)
        this.cacheCList = true

      if(this.loisirs.length != 0)
        this.cacheLoisirList = true   
      
      if(this.autresLangues.length != 0)
        this.cacheLlist = true
    } 



    if(sessionStorage.getItem('cacheFromEducation')==='false'){
      this.cache = false
      this.cacheEdList = true
      if(this.loisirs.length != 0)
        this.cacheLoisirList = true

      if(this.experiences.length != 0)
        this.cacheEpList = true 

      if(this.competences.length != 0)
        this.cacheCList = true 

      if(this.autresLangues.length != 0)
        this.cacheLlist = true  
    } 


    if(sessionStorage.getItem('cacheFromCompetence')==='false'){
      this.cache = false
      this.cacheCList = true
      if(this.loisirs.length != 0)
        this.cacheLoisirList = true

      if(this.educations.length != 0)
        this.cacheEdList = true 

      if(this.experiences.length != 0)
        this.cacheEpList = true 

      if(this.autresLangues.length != 0)
        this.cacheLlist = true  
    } 


    
    if(sessionStorage.getItem('cacheFromLangue')==='false'){
      this.cache = false
      this.cacheLlist = true
      if(this.loisirs.length != 0)
        this.cacheLoisirList = true

      if(this.educations.length != 0)
        this.cacheEdList = true 

      if(this.experiences.length != 0)
        this.cacheEpList = true 

      if(this.competences.length != 0)
        this.cacheCList = true   
    }



    if(sessionStorage.getItem('cacheFromLoisir')==='false'){
      this.cache = false
      this.cacheLoisirList = true
      if(this.experiences.length != 0)
        this.cacheEpList = true

      if(this.educations.length != 0)
        this.cacheEdList = true 

      if(this.competences.length != 0)
        this.cacheCList = true 

      if(this.autresLangues.length != 0)
        this.cacheLlist = true

    }


    sessionStorage.clear()



    //init infos person Values
    this.initValues()
    this.newUrlLink = this.img.getUrlLink()
  }
 
  onSubmit(f: any){
    //ajouter les infos enregistrer la service
    this.userDataService.addToInfoPerso(f.value)

    this.newUrlLink = this.img.getUrlLink()

    this.cache=!this.cache

    //init fname and lname and presentation
    this.initValues()

   // this.router.navigateByUrl('/cv')
  }

  // init les valeur pour affichage dans div remplir section
  initValues(){
    this.fname = this.userDataService.getInfosPerso()[0].fname
    this.lname = this.userDataService.getInfosPerso()[0].lname
    this.presentation = this.userDataService.getInfosPerso()[0].presentation
  }

  // pour cacher le div infos perso oubien le div pour les section ou inversement
  changeCacheValue(){
    this.cache = !this.cache
  }

  //upload image
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
  

  // Selon la valeur de la section affiche formulaire correspondant
  switchForm(mySelect:any){   
      switch(mySelect.value){
        case "EP" : this.router.navigateByUrl('/ep')
          break
        case "EF" : this.router.navigateByUrl('/ef')
          break
        case "C" : this.router.navigateByUrl('/c')
          break
        case "LANG" : this.router.navigateByUrl('/lang')
          break
        case "LOISIR" : this.router.navigateByUrl('/l')
          break 
      }
  }

  // desactive le button de la section si rien n'est sélectionner
  onInputChange(event : any){
    const value = (event.target as HTMLInputElement).value
    this.disable = value !== "" ? false : true 
  }

  //modifier langues
  modifierLangues(){
    this.router.navigateByUrl('/lang')
  }
 
}
