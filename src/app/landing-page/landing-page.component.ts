import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
   ok : boolean = true
   activatedRoute!: ActivatedRoute;

   constructor(private router : Router){}

   verifie(){
    this.ok = !this.ok
    
    this.router.navigateByUrl('/form')
   }

   goToTemplateCV(){
    this.router.navigate(['template'], {relativeTo : this.activatedRoute})
   }

}
