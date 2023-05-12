import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjetService } from '../projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-one-projet',
  templateUrl: './one-projet.component.html',
  styleUrls: ['./one-projet.component.css']
})
export class OneProjetComponent {
  @Input() oneProjet : any = {};
  @Input() index : any

  @Output() eventEmitter = new EventEmitter();

  constructor(private projet : ProjetService){}

  update(){
    this.eventEmitter.emit(this.oneProjet)
  }

  delete(){   
    Swal.fire({
      title: 'Etes vous sûr(e)?',
      text: `De supprimer ${this.oneProjet.poste}?`,
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
        this.projet.projets.splice(this.index, 1)
      }
    });    
 }  
}
