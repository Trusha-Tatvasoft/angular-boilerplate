import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { LoginModel } from '../model/login.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginModel = new LoginModel();

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  login(f: { form: { valid: boolean } }) {
    if (f.form.valid) {
      this.authService.login().subscribe((res) => {
        if (res) {
          localStorage.setItem('token', '12345');
          this.snackbarService.open({
            message: 'Login Successfully!',
            type: 'success',
            action: '',
            config: {},
          });
          this.router.navigate(['/user']);
        } else {
          this.snackbarService.open({
            message: 'Username Password is incorrect!',
            type: 'error',
            action: '',
            config: {},
          });
        }
      });
    }
  }
}
