import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Entites/user';
import { Environments } from '../../environments/environments.local';
import { AuthService } from './auth.service';

const headers={
  headers:new HttpHeaders({'Content-type':'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('Token') })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient) { }

  allUser():Observable<Array<User>>{
    return this.http.get<any>(`${Environments.API_URL}/user/all`,headers)
    
  }
}
