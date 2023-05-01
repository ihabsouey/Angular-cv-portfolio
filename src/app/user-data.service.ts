import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  infosPerso : any[] = []

  constructor() {}

  addToInfoPerso(data : any){
    this.infosPerso?.push(data)
  }

  

}
