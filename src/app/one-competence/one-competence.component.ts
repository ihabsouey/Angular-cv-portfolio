import { Component, Input } from '@angular/core';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-one-competence',
  templateUrl: './one-competence.component.html',
  styleUrls: ['./one-competence.component.css']
})
export class OneCompetenceComponent {
  @Input() oneCompetence : any = {}
  @Input() index : any
 
  selectedSkills : String[] = []

  constructor(private competence : CompetenceService){}

  ngOnInit(){
    this.selectedSkills = this.competence.getCompetences()
  }

  // Fonction de suppression d'une compétence
  delete() {
    const index = this.competence.getCompetences().indexOf(this.oneCompetence);
    if (index >= 0) {
      this.competence.competences.splice(index, 1);
    }
  }
}
