import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormComponent } from './form/form.component';
import { CvModelComponent } from './cv-model/cv-model.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'cv', component: CvModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
