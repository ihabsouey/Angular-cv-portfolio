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
  postMessage(input: any) {
    return this.http.post(
      'https://mailthis.to/memo.contactini@gmail.com',
      input,
      {
        responseType: 'text',
      }
    );
  }

  submitBook() {
    this.postMessage(this.ContactForm.value).subscribe(
      (response) => {
        location.href = 'http://mailthis.to/confirm';
        console.log(response);
      },
      (error) => {
        console.log({ error });
      }
    );
  }
}
