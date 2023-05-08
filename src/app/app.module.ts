import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CvModelComponent } from './cv-model/cv-model.component';
import { ExperienceProComponent } from './experience-pro/experience-pro.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OneExperienceComponent } from './one-experience/one-experience.component';
import { EducatinFormComponent } from './educatin-form/educatin-form.component';
import { OneEducationComponent } from './one-education/one-education.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormComponent,
    HeaderComponent,
    CvModelComponent,
    ExperienceProComponent,
    OneExperienceComponent,
    EducatinFormComponent,
    OneEducationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
