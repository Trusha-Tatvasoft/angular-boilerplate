import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { UserModel } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
})
export class UserAddEditComponent implements OnInit {
  userModel = new UserModel();
  userId: number | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.getUser();
    }
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe((res) => {
      if (res) {
        this.userModel = res;
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

  add(f: { form: { valid: boolean } }) {
    if (f.form.valid) {
      this.userService.addUser(this.userModel).subscribe((res) => {
        if (res) {
          this.snackbarService.open({
            message: 'User Added Successfully!',
            type: 'success',
            action: '',
            config: {},
          });
          this.router.navigate(['/user']);
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

  update(f: { form: { valid: boolean } }) {
    if (f.form.valid) {
      this.userService
        .updateUser(this.userModel, this.userId)
        .subscribe((res) => {
          if (res) {
            this.snackbarService.open({
              message: 'User Updated Successfully!',
              type: 'success',
              action: '',
              config: {},
            });
            this.router.navigate(['/user']);
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
