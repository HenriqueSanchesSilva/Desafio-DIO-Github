import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/3c20b961-fb62-4d76-a771-27d6d7f5db01'

  constructor(private httpClient: HttpClient) { }

  //retorna lista de usuarios, READ do CRUD
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
