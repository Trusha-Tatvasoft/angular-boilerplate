// Angular
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
// RxJS
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class InterceptService implements HttpInterceptor {
  serviceCount = 0;
  constructor(private spinnerService: NgxSpinnerService) { }
  intercept(req: HttpRequest<Request>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.serviceCount++;
      this.spinnerService.show();
      const token = localStorage.getItem('token');
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: token
          }
        });
    }
    return next.handle(req).pipe(retry(1),tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (this.serviceCount > 0) {
          this.serviceCount--;
        }
        if (this.serviceCount === 0) {
          this.onEnd();
        }
      }
    },
      (err: HttpErrorResponse) => {
        let errorMessage = '';
          if (err.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${err.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
          }
        this.onEnd();
        return throwError(errorMessage);
      }));
  }
  private onEnd(): void {
    this.hideLoader();
  }
  private hideLoader(): void {
    this.spinnerService.hide();
  }
}
