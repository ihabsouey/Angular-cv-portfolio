import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  infosPerso : any[] = []

  constructor() {}

  addToInfoPerso(data : any){
    if(this.infosPerso.length != 0)
      this.infosPerso[0] = data
    else
      this.infosPerso?.push(data)
    
  }
  
  getInfosPerso(){
    return this.infosPerso
  }


}
