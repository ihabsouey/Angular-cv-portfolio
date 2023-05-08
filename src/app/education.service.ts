import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  educations : any[] = []

  constructor() {}

  addEducation(data : any){
    this.educations?.push(data)
  }
                
  getEducations(){
    return this.educations
  }
  
}
