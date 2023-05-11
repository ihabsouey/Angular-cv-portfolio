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
  constructor(private router: Router, private auth: AuthService) {}
  verifie() {
    this.ok = !this.ok;

    this.router.navigateByUrl('/form');
  }
  contacter() {
    this.ok = !this.ok;
    this.router.navigateByUrl('/contact');
  }
}
