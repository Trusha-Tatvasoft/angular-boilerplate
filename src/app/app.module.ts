import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InterceptService } from 'src/shared/services/intercepter.service';
import { AuthGuard } from './helpers/guards/auth.guard';
import { PageNotFoundComponent } from 'src/shared/components/page-not-found/page-not-found.component';
import { SnackbarService } from 'src/shared/services/snackbar.service';
import { MaterialModule } from 'src/shared/modules/material.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [
    AuthGuard,
    SnackbarService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
