import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
   ok : boolean = true

   verifie(){
    this.ok = !this.ok
    return this.ok
   }

}
