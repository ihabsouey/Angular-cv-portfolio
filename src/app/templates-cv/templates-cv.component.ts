import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-templates-cv',
  templateUrl: './templates-cv.component.html',
  styleUrls: ['./templates-cv.component.css'],
})
export class TemplatesCVComponent {
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
