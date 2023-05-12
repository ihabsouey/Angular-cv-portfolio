import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompetenceService } from '../competence.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-competence-form',
  templateUrl: './competence-form.component.html',
  styleUrls: ['./competence-form.component.css'],
})
export class CompetenceFormComponent {
  // Le formulaire
  form!: FormGroup;

  // Les compétences sélectionnées
  selectedSkills: String[] = [];

  constructor(
    private fb: FormBuilder,
    private competence: CompetenceService,
    private location: Location
  ) {}

  ngOnInit() {
    // Init form
    this.form = this.fb.group({
      skill: ['', Validators.required],
    });
  }

  // ajout d'une compétence
  addSkill() {
    const skill = this.form.value.skill;
    skill.split(';').forEach((element: any) => {
      if (element.trim() != '' && !this.selectedSkills.includes(element.trim()))
        this.selectedSkills.push(element.trim());
    });

    this.form.reset();
  }

  //  suppression d'une compétence
  removeSkill(skill: String) {
    const index = this.selectedSkills.indexOf(skill);
    if (index >= 0) {
      this.selectedSkills.splice(index, 1);
    }
  }
  //
  onSubmit() {
    if (this.selectedSkills.length != 0) {
      if (this.competence.getCompetences().length != 0) {
        this.competence.competences = [
          ...this.competence.getCompetences(),
          ...this.selectedSkills,
        ];
      } else {
        this.competence.addSkills(this.selectedSkills);
      }

      sessionStorage.setItem('cacheFromCompetence', 'false');
      this.location.back();
    }
  }
}
