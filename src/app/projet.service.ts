import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  projets : any[] = []
  
  tmp : any = {}

  addProjet(data : any){
    this.projets?.push(data)
  }

  getProjets(){
    return this.projets
  }
}
