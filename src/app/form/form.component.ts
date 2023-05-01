import { UserDataService } from './../user-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoProfilComponent } from '../photo-profil/photo-profil.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  constructor(private userDataService : UserDataService,
    private router : Router){}
  
  onSubmit(f: any){
    this.userDataService.addToInfoPerso(f.value)

    console.log(this.userDataService.infosPerso)

    this.router.navigateByUrl('/cv')
  }

  

}
