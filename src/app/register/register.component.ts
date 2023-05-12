import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  typePassword: string = 'password';
  typePasswordConfirm: string = 'password';
  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      Swal.fire({
        title: 'Attention !',
        text: 'Merci de remplir tout les champs',
        confirmButtonColor: '#ffcc00',
      });
      return;
    }
    //test if the email is valid with regex
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regex.test(this.email)) {
      Swal.fire({
        title: 'Attention !',
        text: 'Merci de saisir une adresse email valide',
      });
      return;
    }

    if (this.password.length < 6) {
      Swal.fire({
        title: 'Attention !',
        text: 'Le mot de passe doit contenir au moins 6 caractères',
      });
      return;
    }
    if (this.password.length > 20) {
      Swal.fire({
        title: 'Attention !',
        text: 'Le mot de passe doit contenir au maximum 20 caractères',
      });
      return;
    }
    if (this.confirmPassword != this.password) {
      Swal.fire({
        title: 'Attention !',
        text: 'Les mots de passe ne correspondent pas',
      });
      return;
    }

    this.auth
      .signup(this.email, this.password)
      .then((res) => {
        Swal.fire({
          title: 'Bravo !',
          text: 'Inscription réussie',
        });
        this.router.navigate(['/']);
      })
      .catch((err) => console.log(err));
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.typePassword = 'text';
    } else {
      this.typePassword = 'password';
    }
  }
  showHidePasswordConfirm() {
    this.showPasswordConfirm = !this.showPasswordConfirm;
    if (this.showPasswordConfirm) {
      this.typePasswordConfirm = 'text';
    } else {
      this.typePasswordConfirm = 'password';
    }
  }
}
