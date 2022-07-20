import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/shared/services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      this.snackbarService.open({
        message: 'You are not Authorize to Access this page',
        type: 'error',
        action: '',
        config: {},
      });
      return false;
    }
    return true;
  }
}
