import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  ok: boolean = true;
  activatedRoute!: ActivatedRoute;

  constructor(private router: Router, private auth: AuthService) {}
  mail: any;
  ngOnInit(): void {
    this.getuserEmail().then((result) => {
      this.mail = result;
    });
  }

  verifie() {
    this.ok = !this.ok;
    this.router.navigateByUrl('/form');
  }
  checkUserAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth.hasUser().subscribe((user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
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
        alert('Logged out successfully');
        this.router.navigate(['/login']);
        this.mail = '';
      })
      .catch((err) => console.log(err));
  }

  goToTemplateCV() {
    this.router.navigate(['template'], { relativeTo: this.activatedRoute });
  }
}

