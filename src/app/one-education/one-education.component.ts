import { Component, Input } from '@angular/core';
import { EducationService } from '../education.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-one-education',
  templateUrl: './one-education.component.html',
  styleUrls: ['./one-education.component.css']
})
export class OneEducationComponent {
 @Input() oneEducation : any = {}
 @Input() index : any

 constructor(private education : EducationService){}

 delete(){   
    Swal.fire({
      title: 'Etes vous sûr(e)?',
      showCancelButton: true,
      confirmButtonColor : '#dc3545',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.education.educations.splice(this.index, 1)
      }
    });    
 }


}
