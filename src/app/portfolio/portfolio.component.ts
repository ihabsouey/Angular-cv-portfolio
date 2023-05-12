import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  template = 0;
  activatedRoute!: ActivatedRoute;
  constructor(private router: Router, private location: Location) {}

  showModel() {
    // this.router.navigate([''], {relativeTo : this.activatedRoute})
  }

  goBack() {
    this.location.back();
    sessionStorage.setItem('fromTemplate', 'false');
  }
  changeTemplate(newTemplate: any) {
    //this.router.navigate(['/template2'], { relativeTo: this.activatedRoute });
    this.template = newTemplate;
  }
}
