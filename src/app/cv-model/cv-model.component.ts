import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-cv-model',
  templateUrl: './cv-model.component.html',
  styleUrls: ['./cv-model.component.css']
})
export class CvModelComponent {
  infosPersoData : any[] = []

  constructor(private userDataService : UserDataService){}

  ngOnInit(){
    this.infosPersoData = this.userDataService.infosPerso
  }

}
