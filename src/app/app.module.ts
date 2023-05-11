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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OneExperienceComponent } from './one-experience/one-experience.component';
import { EducatinFormComponent } from './educatin-form/educatin-form.component';
import { OneEducationComponent } from './one-education/one-education.component';
import { CompetenceFormComponent } from './competence-form/competence-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_CHIPS_DEFAULT_OPTIONS,
  MatChipsModule,
} from '@angular/material/chips';
import { COMMA, SPACE } from '@angular/cdk/keycodes';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OneCompetenceComponent } from './one-competence/one-competence.component';
import { LangueFormComponent } from './langue-form/langue-form.component';
import { LoisirFormComponent } from './loisir-form/loisir-form.component';
import { OneLoisirComponent } from './one-loisir/one-loisir.component';

import { environment } from '../environments/environment';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { provideAuth, getAuth } from '@angular/fire/auth';

import { CommonModule } from '@angular/common';
import { FirstCvModelComponent } from './first-cv-model/first-cv-model.component';
import { TemplatesCVComponent } from './templates-cv/templates-cv.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

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
    CompetenceFormComponent,
    OneCompetenceComponent,
    LangueFormComponent,
    LoisirFormComponent,
    OneLoisirComponent,

    RegisterComponent,
    LoginComponent,

    FirstCvModelComponent,
    TemplatesCVComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,

    CommonModule,
  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [COMMA, SPACE],
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
