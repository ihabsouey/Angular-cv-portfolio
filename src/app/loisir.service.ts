import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoisirService {
  loisirs : string[] = []

  addLoisir(data : string){
    this.loisirs?.push(data)
  }

  getLoisirs(){
    return  this.getLoisirs
  }

  add(str : string[]){
    if(this.loisirs.length != 0){
      for(let lang of str){
        if(!this.loisirs.includes(lang)){
          this.loisirs.push(lang)
        }
      }
    }else
      this.loisirs = str
  }
}