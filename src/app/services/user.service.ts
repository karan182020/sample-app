import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUser } from '../interfaces/base-user';
import { Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<User[]>(url)
           .pipe(map( (users: User[]) => users.map(user => new User(user))));
  }
}
