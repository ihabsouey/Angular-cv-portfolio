import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguesService {
  lMaternelle!: string
  lAutres: String[] = []

  addLMaternelle(str : any){
    this.lMaternelle = str
  }

  getLMaternelle() {
    return this.lMaternelle
  }

  addLAutres(data : String[]){
    this.lAutres = data
  }

  getLAutres(){
    return this.lAutres
  }

  add(str : String[]){
    if(this.lAutres.length != 0){
      for(let lang of str){
        if(!this.lAutres.includes(lang)){
          this.lAutres.push(lang)
        }
      }
    }else
      this.lAutres = str
  }


}
