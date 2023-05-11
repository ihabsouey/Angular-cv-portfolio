import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { zipAll } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
    private http: HttpClient
  ) {}
  activatedRoute!: ActivatedRoute;
  ContactForm = new FormGroup({
    nom: new FormControl(),
    email: new FormControl(),
    numero: new FormControl(),
    message: new FormControl(),
  });
  bookTitleControl = new FormControl();
  bookDescriptionControl = new FormControl();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  submitBook() {
    console.log(JSON.stringify(this.ContactForm.value));
    alert('Merci pour ton message ' + this.ContactForm.value?.nom);
    /*this.http
      .post(
        'https://formsubmit.co/Memo.Contactini@gmail.com',
        JSON.stringify({
          nom: 'dza',
          email: 'dza',
          numero: 'dza',
          message: 'dzzad',
        }),
      )
      .subscribe(
        (response) => {
          location.href = 'https://www.javascripttutorial.net/';

          console.log(response);
        },
        (error) => {
          console.log(error.json());
        }
      );*/
  }
}
