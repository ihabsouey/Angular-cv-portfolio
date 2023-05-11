import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
email : string = '';
password : string = '';
  constructor(private auth : AuthService) { }
  onSubmit(){
    this.auth.signup(this.email,this.password).then(res =>{
      console.log("Signed up successfully");
    }).catch(err => console.log(err));

  }

}
