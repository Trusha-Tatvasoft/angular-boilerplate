import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../model/login.model';
import { SignupModel } from '../model/signup.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login() {
    return this.http.get<LoginModel>(environment.baseURL + 'user/1');
  }

  signup(data: SignupModel) {
    return this.http.post<SignupModel>(environment.baseURL + 'user/', data);
  }
}
