import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/3c20b961-fb62-4d76-a771-27d6d7f5db01';

  constructor(private httpClient: HttpClient) { }

  //retorna lista de usuarios, READ do CRUD
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //salva usuarios na lista, CREATE do CRUD

  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user);
  }


  //DELETE do crud

  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  //UPDATE Do CRUD, edita a lista

  updateUser(id: string, user: User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user)
  }

  //Lista uma linha, Read tambem

  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}
