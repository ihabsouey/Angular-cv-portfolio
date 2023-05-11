import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}
  onSubmit() {
    this.auth
      .login(this.email, this.password)
      .then((res) => {
        console.log('Logged in successfully');
      })
      .catch((err) => console.log(err));
  }
}
