import { MatSnackBarConfig } from '@angular/material/snack-bar';

export class SnackbarMessage {
  message: string;
  type: string;
  action: string;
  config: MatSnackBarConfig;

  constructor(
    message: string,
    type?: string,
    action?: string,
    config?: MatSnackBarConfig,
  ) {
    this.message = message;
    this.type = type ? type : 'success';
    this.action = action ? action : '';
    this.config = config
      ? config
      : {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        };
  }
}
