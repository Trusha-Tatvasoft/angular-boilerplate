import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { SignupModel } from '../model/signup.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupModel = new SignupModel();

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  signup(f: { form: { valid: boolean } }) {
    if (f.form.valid) {
      this.authService.signup(this.signupModel).subscribe((res) => {
        if (res) {
          this.snackbarService.open({
            message: 'Signup Successfully!',
            type: 'success',
            action: '',
            config: {},
          });
          this.router.navigate(['/']);
        } else {
          this.snackbarService.open({
            message: 'Something Went Wrong!',
            type: 'error',
            action: '',
            config: {},
          });
        }
      });
    }
  }
}
