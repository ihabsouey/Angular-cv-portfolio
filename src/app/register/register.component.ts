import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  
  typePassword: string = "password";
  showPassword: boolean = false;

  constructor(private auth: AuthService , private router: Router) { }


  onSubmit() {
    if (this.email == '' || this.password == '' || this.confirmPassword == '') {
      alert("Please fill all the fields");
      return;
    }
    //test if the email is valid with regex
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!regex.test(this.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (this.password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }
    if (this.password.length > 20) {
      alert("Password should be less than 20 characters");
      return;
    }
    if (this.confirmPassword != this.password) {
      alert("Passwords don't match");
      return;
    }

    this.auth.signup(this.email, this.password).then(res => {
      alert("Signed up successfully");
      this.router.navigate(['/']);
      

    }).catch(err => console.log(err));

  }
  showHidePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.typePassword = "text";
    } else {
      this.typePassword = "password";
    }

  }

}
