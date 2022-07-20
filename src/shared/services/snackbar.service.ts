import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { SnackbarMessage } from '../models/snackbar-message.model';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(public snackBar: MatSnackBar) {}

  open(properties: SnackbarMessage): MatSnackBarRef<SimpleSnackBar> {
    if (properties.type) {
      properties.config.panelClass = `sb-${properties.type}`;
      properties.config.duration = 3000;
      properties.config.verticalPosition = 'top';
      properties.config.horizontalPosition = 'right';
    }

    return this.snackBar.open(
      properties.message,
      properties?.action,
      properties?.config,
    );
  }
}
