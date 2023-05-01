import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CvModelComponent } from './cv-model/cv-model.component';
import { PhotoProfilComponent } from './photo-profil/photo-profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormComponent,
    HeaderComponent,
    CvModelComponent,
    PhotoProfilComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
