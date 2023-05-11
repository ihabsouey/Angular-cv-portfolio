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
  displayNamee = this.auth.displayName;

  verifie() {
    this.ok = !this.ok;

    this.router.navigateByUrl('/form');
  }
  logout() {
    // alert(this.auth.hasUser());
    // console.log(this.displayNamee);
    this.auth
      .logout()
      .then((res) => {
        alert('Logged out successfully');
      })
      .catch((err) => console.log(err));
  }

  goToTemplateCV() {
    this.router.navigate(['template'], { relativeTo: this.activatedRoute });
  }
}
