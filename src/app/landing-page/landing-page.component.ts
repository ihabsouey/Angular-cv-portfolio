import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    // this.auth
    //   .logout()
    //   .then((res) => {
    //       Swal.fire({
    //         title: 'Attention !',
    //         text: 'Logged out successfully',
    //         confirmButtonColor: '#ffcc00',
    //         confirmButtonText: 'ok',
    //       });
    //     };
    //     this.router.navigate(['/login']);
    //     this.mail = '';
    //   })
    //   .catch((err) => console.log(err));
  }

  goToTemplateCV() {
    this.router.navigate(['template'], { relativeTo: this.activatedRoute });
  }
}
