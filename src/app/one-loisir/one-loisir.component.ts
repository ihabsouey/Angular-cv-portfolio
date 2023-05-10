import { Component, Input } from '@angular/core';
import { LoisirService } from '../loisir.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-one-loisir',
  templateUrl: './one-loisir.component.html',
  styleUrls: ['./one-loisir.component.css']
})
export class OneLoisirComponent {
  @Input() oneLoisir! : string
  @Input() index! : any

  constructor(
    private loisir : LoisirService
  ){}

  delete(){   
    Swal.fire({
      title: 'Etes vous sûr(e)?',
      text: `De vouloir supprimer <<${this.oneLoisir}>>?`,
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
        this.loisir.loisirs.splice(this.index, 1)
      }
    });    
 } 
}
