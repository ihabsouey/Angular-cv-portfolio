import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private auth: AuthService) {}
  activatedRoute!: ActivatedRoute;

  ok: boolean = true;
  verifiee() {
    this.ok = !this.ok;

    this.router.navigate(['form'], { relativeTo: this.activatedRoute });
  }
}
