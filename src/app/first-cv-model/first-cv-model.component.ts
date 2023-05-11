import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';
import { ExperienceService } from '../experience.service';
import { EducationService } from '../education.service';
import { CompetenceService } from '../competence.service';
import { LanguesService } from '../langues.service';
import { LoisirService } from '../loisir.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-first-cv-model',
  templateUrl: './first-cv-model.component.html',
  styleUrls: ['./first-cv-model.component.css']
})
export class FirstCvModelComponent {
  urlLink : any = ""
  infosPerso : any[] = []
  experiences : any[] = []
  educations : any[] = []
  competences : any[] = []
  langueMaternelle : any = "" 
  autresLangues : any[] = []
  loisirs : any[] = []

  // selon social media type de logo
  sm : any = ""

  color : ThemePalette 
 

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
   this.infosPerso = this.userDataService.getInfosPerso()
   this.experiences = this.experience.getExperiences()
   this.educations = this.education.getEducations()
   this.competences = this.competence.getCompetences()
   this.loisirs = this.loisir.loisirs
   this.urlLink = this.img.getUrlLink()
   this.autresLangues = this.langue.getLAutres()
   this.langueMaternelle = this.langue.getLMaternelle()


   //this.sm = this.infosPerso[0].socialMedia === 'in' ? "bi bi-linkedin" : "bi bi-github"
  
  }
}
