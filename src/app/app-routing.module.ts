import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormComponent } from './form/form.component';
import { CvModelComponent } from './cv-model/cv-model.component';
import { ExperienceProComponent } from './experience-pro/experience-pro.component';
import { EducatinFormComponent } from './educatin-form/educatin-form.component';
import { CompetenceFormComponent } from './competence-form/competence-form.component';
import { LangueFormComponent } from './langue-form/langue-form.component';
import { LoisirFormComponent } from './loisir-form/loisir-form.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'cv', component: CvModelComponent},
  {path: 'ep', component: ExperienceProComponent},
  {path: 'ef', component: EducatinFormComponent},
  {path: 'c', component: CompetenceFormComponent},
  {path: 'lang', component: LangueFormComponent},
  {path: 'l', component: LoisirFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
