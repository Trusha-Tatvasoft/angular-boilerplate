import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/modules/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AuthRoutingModule,
        FormsModule

    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent
    ],

})
export class AuthModule { }