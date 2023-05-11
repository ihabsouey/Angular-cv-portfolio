import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-templates-cv',
  templateUrl: './templates-cv.component.html',
  styleUrls: ['./templates-cv.component.css']
})
export class TemplatesCVComponent {
  activatedRoute!: ActivatedRoute

  constructor(
    private router : Router
  ){}

  showModel(){
    this.router.navigate([''], {relativeTo : this.activatedRoute})
  }
}
