import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  urlLink! : String

  constructor() { }

  addUrlLink(url : String){
    this.urlLink = url
  }

  getUrlLink(){
    return this.urlLink
  }
}
