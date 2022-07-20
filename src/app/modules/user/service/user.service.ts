import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  list(page: number, limit: number): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(
      environment.baseURL + `user?_page=${page}&_limit=${limit}`,
    );
  }

  addUser(data: UserModel) {
    return this.http.post<UserModel>(environment.baseURL + `user`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(environment.baseURL + `user/${id}`);
  }

  getUser(id: number | undefined): Observable<UserModel> {
    return this.http.get<UserModel>(environment.baseURL + `user/${id}`);
  }

  updateUser(data: UserModel, id: number | undefined) {
    return this.http.put<UserModel>(environment.baseURL + `user/${id}`, data);
  }
}
