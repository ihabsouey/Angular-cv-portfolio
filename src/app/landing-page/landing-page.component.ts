import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
   ok : boolean = true

   constructor(private router : Router , private auth :AuthService){}
   displayNamee = this.auth.displayName
 
       
   verifie(){
    this.ok = !this.ok
    
    this.router.navigateByUrl('/form')
   }
   logout(){
    alert(this.auth.hasUser())
   console.log(this.displayNamee)
    // this.auth.logout().then(res =>{
    //   alert("Logged out successfully");
    // }).catch(err => console.log(err));

   }


}
function resolve(arg0: boolean) {
  throw new Error('Function not implemented.');
}

