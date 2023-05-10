import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  competences : String[] = []
  constructor() { }

  addSkills(skills :String[]){
    this.competences = skills
  }

  getCompetences(){
    return this.competences
  }
}
