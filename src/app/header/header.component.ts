import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ok: boolean = true;
  mail: any;
  logged: any;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.getuserEmail().then((result) => {
      this.mail = result;
    });
    this.checkUserAuthentication().then((result) => {
      this.logged = result;
    });
  }
  verifie() {
    this.ok = !this.ok;

    this.router.navigateByUrl('/form');
  }
  contacter() {
    this.ok = !this.ok;
    this.router.navigateByUrl('/contact');
  }
  cv() {
    this.ok = !this.ok;
    this.router.navigateByUrl('/form');
  }

  getuserEmail() {
    return new Promise((resolve, reject) => {
      this.auth.hasUser().subscribe((user) => {
        if (user) {
          resolve(user.email);
        } else {
          resolve('');
        }
      });
    });
  }
  logout() {
    this.auth
      .logout()
      .then((res) => {
        this.mail = '';
        location.href = '';
      })
      .catch((err) => console.log(err));
  }
  checkUserAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth.hasUser().subscribe((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['']);
          resolve(false);
        }
      });
    });
  }
}
