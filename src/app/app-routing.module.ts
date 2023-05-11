import { FirstCvModelComponent } from './first-cv-model/first-cv-model.component';
import { TemplatesCVComponent } from './templates-cv/templates-cv.component';
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

import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'form', component: FormComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cv', component: CvModelComponent },
  { path: 'ep', component: ExperienceProComponent },
  { path: 'ef', component: EducatinFormComponent },
  { path: 'c', component: CompetenceFormComponent },
  { path: 'lang', component: LangueFormComponent },
  { path: 'l', component: LoisirFormComponent },
  { path: 'template', component: TemplatesCVComponent },
  { path: 'first', component: FirstCvModelComponent },

  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
