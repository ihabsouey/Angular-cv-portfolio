import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  urlLink! : String
  urlImgProjet!: String

  constructor() { }

  addUrlLink(url : String){
    this.urlLink = url
  }

  getUrlLink(){
    return this.urlLink
  }

  addUrlImgProjet(url : String){
    this.urlImgProjet = url
  }

  getUrlImgProjet(){
    return this.urlImgProjet
  }
}
