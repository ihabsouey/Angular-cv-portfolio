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
      text: `De supprimer ${this.oneEducation.formation}?`,
      input: 'text',
      inputPlaceholder: 'supprimer',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      preConfirm: (inputValue) => {
        if (inputValue === 'supprimer') {
          return true;
        } else {
          Swal.showValidationMessage('tapez "supprimer" pour confirmer !');
          return false;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.education.educations.splice(this.index, 1)
      }
    });    
 }


}
