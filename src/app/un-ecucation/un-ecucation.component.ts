import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-un-ecucation',
  templateUrl: './un-ecucation.component.html',
  styleUrls: ['./un-ecucation.component.css']
})
export class UnEcucationComponent {
  @Input() oneEducation : any = {};
  @Input() index : any

  constructor(private education : EducationService){}

  delete(){   
    Swal.fire({
      title: 'Etes vous sûr(e)?',
      text: `De supprimer ${this.oneEducation.poste}?`,
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
